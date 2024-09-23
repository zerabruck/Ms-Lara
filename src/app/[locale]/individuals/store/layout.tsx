import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Massage products",
    "wellness products",
    "massage oils",
    "massage equipment",
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
  const { resources } = await initTranslations(locale, ["individuals"]);

  return (
    <TranslationsProvider
      namespaces={["individuals"]}
      locale={locale}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
}
