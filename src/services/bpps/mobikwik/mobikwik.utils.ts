export const BASE_URL = process.env.MOBIKWIK_BASE_URL || 'https://alpha3.mobikwik.com';

export const getHeaders = () => ({
  'Content-Type': 'application/json',
  'X-MClient': '14',
});
