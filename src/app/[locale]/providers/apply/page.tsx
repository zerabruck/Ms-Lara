import SpaCallToActionSection from "./components/ApplicationForm";
import FocalPoint from "./components/FocalPoint";
import WhatHappensNextSection from "./components/WhatHappensNextSection";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Work with Us Massage therapist jobs",
    "join our team",
    "therapist opportunities",
    "provider applications",
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
      <FocalPoint />
      <SpaCallToActionSection />
      <WhatHappensNextSection />
    </>
  );
}
