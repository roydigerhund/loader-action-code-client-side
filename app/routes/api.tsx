import { ActionFunction, json } from "remix";
import { testCookie } from "~/cookies";

export const action: ActionFunction = async ({ request }) => {
  const cookie = await testCookie.serialize('username');
  return json({ cookie });
};