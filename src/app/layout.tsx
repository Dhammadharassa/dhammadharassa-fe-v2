//import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import './styles/globals.css';
// import { Toaster } from "@/components/ui/toaster";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
//import { getBaseUrl } from "@/config/seo";
import { getBaseUrl } from "./config/seo";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: 'Dhammadharassa - Life Your Young Life',
  description: 'Padumuttara Youth Community @dhammadharassa',
  keywords: 'Buddha, Buddhis, Buddhis Organization, Padumuttara Youth Community, Dhammadharassa, dhammadharassa, padum',
  authors: [{ name: 'Dhammadharassa Team' }],
  icons: {
    icon: '/assets/Logo.png', 
  },
  creator: 'Dhammadharassa Team',
  publisher: 'Dhammadharassa Team',
  openGraph: {
    title: 'Dhammadharassa - Life Your Young Life',
    description: 'Padumuttara Youth Community @dhammadharassa',
    url: '',
    siteName: 'Dhammadharassa',
    images: [
      {
        url: '/assets/Logo-2.png',
        width: 1200,
        height: 630,
        alt: 'Dhammadharassa',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${PlusJakartaSans.variable}`}
      >
        {children}
        {/* <Toaster />
        <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
