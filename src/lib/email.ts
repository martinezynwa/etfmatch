// The one form field. Stricter than the browser's type="email", which
// lets "jan@seznam" through; nothing is sent, so this is the only check.

export type EmailError = "empty" | "invalid";

export function emailError(value: string): EmailError | null {
  const email = value.trim();
  if (!email) return "empty";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/.test(email)) return "invalid";
  return null;
}
