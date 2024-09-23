import CallToAction from "./components/CallToAction";
import OurBlogSection from "./components/BlogsSection";
import SecondaryBlogList from "./components/SecondaryBlogList";
import CardsWithImageSection from "./components/CardsWithImageSection";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Industry insights",
    "therapist tips, massage techniques",
    "provider resources",
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
      <CallToAction />
      <OurBlogSection />
      <CardsWithImageSection />
      <SecondaryBlogList />
    </>
  );
}
