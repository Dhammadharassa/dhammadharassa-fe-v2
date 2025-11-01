export function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    try {
      const u = new URL(envUrl);
      return u.origin;
    } catch {}
  }
  //local dev
  return 'http://localhost:3000';
}

export const siteName = 'Dhammadharassa';
