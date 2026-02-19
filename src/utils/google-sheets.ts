import Papa from 'papaparse';
import type { Locale } from '../i18n/utils';

export interface FaqItem {
  question: string;
  answer: string;
  category: 'registration' | 'accommodation' | 'general' | 'payment' | 'sponsorship';
  button_text?: string;
  button_href?: string;
}

interface RawSheetRow {
  question: string;
  answer: string;
  category: string;
  button_text: string;
  button_href: string;
}

const VALID_CATEGORIES = new Set([
  'registration', 'accommodation', 'general', 'payment', 'sponsorship',
]);

function buildCsvUrl(sheetId: string, tab: string): string {
  // Support both published IDs (2PACX-...) and regular spreadsheet IDs
  if (sheetId.startsWith('2PACX-')) {
    return `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv&sheet=${tab}`;
  }
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${tab}`;
}

function validateCategory(raw: string): FaqItem['category'] {
  const normalized = raw.trim().toLowerCase();
  if (!VALID_CATEGORIES.has(normalized)) {
    console.warn(`[FAQ] Unknown category "${raw}", defaulting to "general"`);
    return 'general';
  }
  return normalized as FaqItem['category'];
}

function parseRow(row: RawSheetRow): FaqItem | null {
  const question = row.question?.trim();
  const answer = row.answer?.trim();

  if (!question || !answer) return null;

  const item: FaqItem = {
    question,
    answer,
    category: validateCategory(row.category),
  };

  const btnText = row.button_text?.trim();
  const btnHref = row.button_href?.trim();
  if (btnText && btnHref) {
    item.button_text = btnText;
    item.button_href = btnHref;
  }

  return item;
}

async function loadFallbackJson(locale: Locale): Promise<FaqItem[]> {
  try {
    const mod = await import(`../content/faq/${locale}.json`);
    console.log(`[FAQ] Using fallback JSON for "${locale}" (${mod.items.length} items)`);
    return mod.items.map((item: any) => ({
      question: item.question,
      answer: item.answer,
      category: item.category,
    }));
  } catch (err) {
    console.error(`[FAQ] Fallback JSON also failed for "${locale}":`, err);
    return [];
  }
}

export async function fetchFaqItems(locale: Locale): Promise<FaqItem[]> {
  const sheetId = '2PACX-1vTc7FvBhpt6ClxHXyjkoEUe1liQixwq5-YsofqlOpU4cWDzIhEcVTFsweAVm584LWp8giu5lmYPBlEC';

  const url = buildCsvUrl(sheetId, locale);

  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const csvText = await response.text();

    if (csvText.startsWith('<!DOCTYPE') || csvText.startsWith('<html')) {
      throw new Error('Received HTML instead of CSV. Is the sheet published to web?');
    }

    const parsed = Papa.parse<RawSheetRow>(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h: string) => h.trim().toLowerCase().replace(/\s+/g, '_'),
    });

    if (parsed.errors.length > 0) {
      console.warn('[FAQ] CSV parse warnings:', parsed.errors);
    }

    const items = parsed.data
      .map(parseRow)
      .filter((item): item is FaqItem => item !== null);

    if (items.length === 0) {
      console.warn(`[FAQ] No valid items parsed for locale "${locale}", falling back to JSON`);
      return loadFallbackJson(locale);
    }

    console.log(`[FAQ] Loaded ${items.length} items for "${locale}" from Google Sheets`);
    return items;
  } catch (error) {
    console.error(`[FAQ] Failed to fetch from Google Sheets for "${locale}":`, error);
    return loadFallbackJson(locale);
  }
}
