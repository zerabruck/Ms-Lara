import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StyledComponentsRegistry from "@/lib/registry";
import BottomNav from "@/components/layout/BottomNav";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Mrs Lara Massage therapy",
    default: "Mrs Lara Massage therapy",
  },
  openGraph: {
    title: "Mrs Lara Massage therapy",
    description:
      "Massage therapy, wellness services, book a massage, therapeutic massages",
    url: "http://65.21.105.199:3000",
    siteName: "Next.js",
    images: [
      {
        url: "http://65.21.105.199:3000/logo.svg",
        width: 800,
        height: 600,
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <head></head>
      <body className={inter.className}>
        <AntdRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
