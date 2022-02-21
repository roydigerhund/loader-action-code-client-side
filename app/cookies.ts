import { createCookie } from 'remix';

export const testCookie = createCookie('user', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  secrets: [process.env.APP_SECRET!],
});
