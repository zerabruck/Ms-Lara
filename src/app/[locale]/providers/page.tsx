import ApplicationProcessSection from "./components/ApplicationProcessSection";
import CallToAction from "./components/CallToAction";
import EightSection from "./components/EigthSection";
import FifthSection from "./components/FifthSection";
import FocalPointBackgroundImageContainer from "./components/FocalPointBackgroundPictureContainer";
import FourthSection from "./components/FourthSection";
import ReferalSection from "./components/ReferalSection";
import SecondSection from "./components/SecondSection";
import SeventhSection from "./components/SeventhSection";
import SixthSection from "./components/SixthSection";
import ThirdSection from "./components/ThridSection";

export default function Page() {
  return (
    <>
      <FocalPointBackgroundImageContainer>
        <CallToAction />
      </FocalPointBackgroundImageContainer>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <ApplicationProcessSection />
      <ReferalSection />
    </>
  );
}
