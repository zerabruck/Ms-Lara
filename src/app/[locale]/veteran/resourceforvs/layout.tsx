import type { Metadata } from "next";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Veteran resources",
    "veteran support programs",
    "wellness for veterans",
    "veteran assistance",
  ],
};
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="font-[Helvetica]">{children}</div>;
}
