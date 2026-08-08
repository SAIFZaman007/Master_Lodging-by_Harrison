export function formatUsd(cents: number | null | undefined): string {
  if (cents == null) return "Inquire for pricing";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function formatPhoneDisplay(e164: string): string {
  // +16024788888 -> (602) 478-8888
  const digits = e164.replace(/\D/g, "").slice(-10);
  if (digits.length !== 10) return e164;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function telHref(e164: string): string {
  return `tel:${e164}`;
}

export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}
