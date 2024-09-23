import TabNav from "./components/TabNav";
import TopNav from "./components/TopNav";
import { createContext } from "react";
import TabContextProvider from "./lib/TabContextProvider";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Massage details",
    "service options",
    "booking information",
    "massage descriptions",
    "Choose massage location",
    "massage serviceareas",
    "mobile massage locations",
    "service coverage areas",
    "Secure payment",
    "payment options",
    "massage booking payment",
    "checkout",
    "Booking confirmation",
    "thank you page",
    "booking complete",
    "next steps",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, ["book"]);

  return (
    <TranslationsProvider
      namespaces={["book"]}
      locale={locale}
      resources={resources}
    >
      <TabContextProvider>
        <TopNav />
        <TabNav />
        {children}
      </TabContextProvider>
    </TranslationsProvider>
  );
}
