import type { Metadata } from "next";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Spa professionals",
    "temporary spa staff",
    "massage therapist staffing",
    "spa staffing solutions",
  ],
};
export default async function SpaStaffingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="font-[Helvetica]">{children}</div>;
}
