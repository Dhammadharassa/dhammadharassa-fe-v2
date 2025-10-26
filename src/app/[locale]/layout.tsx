
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from './_components/Nav';
// import Footer from './_components/Footer';
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Cek locale yang valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
    <div>
      <Navbar/>
      {children}
      {/* <Footer/> */}
    </div>
  </NextIntlClientProvider>
  );
}
