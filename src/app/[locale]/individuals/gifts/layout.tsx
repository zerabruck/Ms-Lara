import type { Metadata } from "next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../../i18n";

export const metadata: Metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Massage gift cards",
    "gift a massage, wellness gifts",
    "massage vouchers",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
export default async function GiftsLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["dropdownpages"]);

  return (
    <div className="font-[Helvetica]">
      <TranslationsProvider
        namespaces={["dropdownpages"]}
        locale={locale}
        resources={resources}
      >
        {children}
      </TranslationsProvider>
    </div>
  );
}
