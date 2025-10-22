import './styles/globals.css';
import { Plus_Jakarta_Sans} from "next/font/google";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700'],
});


export const metadata = {
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
  params
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={`${PlusJakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
