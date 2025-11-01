import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/routing';
import { getBaseUrl } from '../config/seo';
import Navbar from './_components/Nav';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) notFound();
  
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar/>
      {children}
    </NextIntlClientProvider>
  );
}

//SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) {
    return {};
  }

  const baseUrl = getBaseUrl();
  const titles: Record<string, string> = {
    en: 'Dhammadharassa - Life Your Young Life',
    id: 'Dhammadharassa - Life Your Young Life',
  };
  const descriptions: Record<string, string> = {
    en: "Dhammadharassa - Life Your Young Life",
    id: 'Dhammadharassa - Life Your Young Life',
  };

  // hreflang alternates
  const languageAlternates = locales.reduce<Record<string, string>>((acc, l) => {
    acc[l] = `${baseUrl}/${l}`;
    return acc;
  }, {});

  return {
    metadataBase: new URL(baseUrl),
    title: titles[locale] ?? titles[defaultLocale],
    description: descriptions[locale] ?? descriptions[defaultLocale],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: titles[locale] ?? titles[defaultLocale],
      description: descriptions[locale] ?? descriptions[defaultLocale],
      url: `${baseUrl}/${locale}`,
      siteName: 'Dhammadharassa',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles[defaultLocale],
      description: descriptions[locale] ?? descriptions[defaultLocale],
    },
  };
}
