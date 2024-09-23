import FirstSection from "./components/FirstSection";
import TabSection from "./components/TabSection";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Provider safety",
    "therapist safety protocols",
    "secure work environments",
    "massage safety measures",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function Page() {
  return (
    <>
      <FirstSection />
      <TabSection />
    </>
  );
}
