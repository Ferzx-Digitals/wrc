/**
 * Payment utilities for WRC registration
 * These are stubs that will be connected to real APIs when credentials are available.
 */

export const PAYMENT_CONFIG = {
  mercadoPago: {
    publicKey: import.meta.env.PUBLIC_MP_PUBLIC_KEY || '',
    // Access token should only be used server-side
    enabled: !!import.meta.env.PUBLIC_MP_PUBLIC_KEY,
  },
  paypal: {
    clientId: import.meta.env.PUBLIC_PAYPAL_CLIENT_ID || '',
    currency: 'USD',
    enabled: !!import.meta.env.PUBLIC_PAYPAL_CLIENT_ID,
  },
};

export type RegistrationType = 'local' | 'international' | 'spouse';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  region: string;
  organization?: string;
  registrationType: RegistrationType;
}

export function getPaymentMethod(type: RegistrationType): 'mercadopago' | 'paypal' | 'bank' {
  if (type === 'local') return 'mercadopago';
  return 'paypal';
}

export function formatPrice(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}
