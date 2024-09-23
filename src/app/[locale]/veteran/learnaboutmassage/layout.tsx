import type { Metadata } from "next";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Massage education",
    "benefits of massage",
    "veteran massage information",
    "massage therapy overview",
  ],
};
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="font-[Helvetica]">{children}</div>;
}
