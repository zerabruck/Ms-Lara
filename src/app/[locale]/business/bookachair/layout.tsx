import type { Metadata } from "next";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Chair massage", "corporate massage events",
    "office massage booking"," mobile massage chairs"
  ],
};
export default async function BookAChairaLyout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <div className="font-[Helvetica]">
        {children}
    </div>
  );
}
