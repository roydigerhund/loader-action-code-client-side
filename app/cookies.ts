import { createCookie } from 'remix';

export const testCookie = createCookie('user', {
  expires: new Date(Date.now() + 60_000 * 60 * 24 * 365), // 1 year
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 365, // 1 year
  path: '/',
  sameSite: 'strict',
  secrets: [process.env.APP_SECRET!],
  secure: process.env.NODE_ENV === 'production',
});
