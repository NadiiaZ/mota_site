/**
 * Contact form endpoint configuration.
 *
 * This project intentionally does NOT fake a successful submission. Wire up
 * one real endpoint before launch:
 *
 *  1. Form backend (recommended, no server needed): create a free endpoint at
 *     https://formspree.io or https://getform.io and paste the URL below.
 *  2. Your own API route: point ENDPOINT_URL at it (expects a JSON POST).
 *
 * If ENDPOINT_URL is left empty, the form will show an honest message and
 * fall back to a mailto: link instead of pretending the message was sent.
 */
export const ENDPOINT_URL = '' // REPLACE: e.g. 'https://formspree.io/f/your-id'

export const projectTypeOptions = [
  'Social Media Ad Creative',
  'Product or Service Animation',
  'SaaS or UI Animation',
  '2D or Character Animation',
  'Creative Adaptation',
  'Other',
] as const

export const budgetRangeOptions = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not sure yet',
] as const
