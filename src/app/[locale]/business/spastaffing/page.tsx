"use client";
import BusinessServiceCard from "@/app/[locale]/individuals/business/components/BusinessServiceCard";
import SideImageCard from "@/app/[locale]/individuals/business/components/SideImageCard";
import SpaCallManagmentSection from "@/app/[locale]/individuals/business/components/SpaCallManagmentSection";
import SpaCallToActionSection from "@/app/[locale]/individuals/business/components/SpaCallToActionSection";
import {
  spaSideService,
  spaStaffingServices,
} from "@/app/[locale]/individuals/business/data/data";
import { Grid } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;

const TopSection = styled.div`
  position: relative;
  height: 89vh;
  background-image: url(/business-images/spastaffing-landing-image.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.p<{ screenSm: boolean }>`
  font-family: "Helvetica";
  font-size: ${(props) => (props.screenSm ? "36px" : "25px")};
  font-weight: 400;
  color: #000000;
  padding: 1rem 1rem;
  text-align: center;
  max-width: 969px;
  font-size: 25px;
`;

const CardContainer = styled.div<{ screenSm: boolean }>`
  position: relative;
  margin-top: -8rem;
  padding: ${(props) => (props.screenSm ? "0 5rem" : "0 2rem")};
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

const BodyText = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #5e596d;
`;

const QuoteContainer = styled.div<{ screenLg: boolean }>`
  width: 100%;
  padding: 0 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  align-items: center;

  .quote-mark {
    font-size: 10rem;
    height: 80px;
    padding: 0rem;
    font-family: Helvetica,
    fontWeight: 400,
    color: "#000000",
    padding: "1rem 1rem",
    textAlign: "center",
  }

  .quote-row {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.screenLg ? "row" : "column")};
    background: linear-gradient(
      270deg,
      rgba(209, 181, 255, 0.64) 15%,
      rgba(133, 171, 247, 0.557273) 54%,
      rgba(81, 164, 242, 0.5) 81%
    );
  }
`;

const Page = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const spaStaffingServices = [
    {
      header: t("spaStaffing.bookOnDemand.title"),
      title: t("spaStaffing.bookOnDemand.description"),
      iconUrl: "/icons/time-icon.svg",
      circleContainer: false,
    },
    {
      header: t("spaStaffing.getBestTherapists.title"),
      title: t("spaStaffing.getBestTherapists.description"),
      iconUrl: "/icons/users-icon.svg",
      circleContainer: false,
    },
    {
      header: t("spaStaffing.easyBilling.title"),
      title: t("spaStaffing.easyBilling.description"),
      iconUrl: "/icons/card-icon.svg",
      circleContainer: false,
    },
    {
      header: t("spaStaffing.bestCustomerService.title"),
      title: t("spaStaffing.bestCustomerService.description"),
      iconUrl: "/icons/phoneplus-icon.svg",
      circleContainer: false,
    },
  ];
  const spaSideService = [
    {
      header: t("spaStaffing.onSiteChairMassage.title"),
      title: t("spaStaffing.onSiteChairMassage.subtitle"),
      body: t("spaStaffing.onSiteChairMassage.description"),
      footer: t("spaStaffing.onSiteChairMassage.footer"),
      isreverse: false,
      imageUrl: "/business-images/spa-side-service-image.png",
    },
  ];
  return (
    <div className="font-[Helvetica]">
      <TopSection />
      <CardContainer screenSm={screen.sm || false}>
        {spaStaffingServices.map((service, index) => (
          <BusinessServiceCard
            key={index}
            title={service.title}
            iconUrl={service.iconUrl}
            header={service.header}
            bgColor={index === 0 ? "#F2F2F2" : "white"}
            circleContainer={false}
          />
        ))}
      </CardContainer>
      <div style={{ padding: screen.sm ? "5rem 7rem" : "5rem 1rem" }}>
        {spaSideService.map((service, index) => (
          <SideImageCard
            key={index}
            header={service.header}
            title={service.title}
            body={service.body}
            footer={service.footer}
            isreverse={service.isreverse}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      <QuoteContainer screenLg={screen.lg || false}>
        <p className="quote-mark -mt-8 mb-5">“</p>
        <Title screenSm={screen.sm || false}>
          {t("spaStaffing.testimonial.quote")}
        </Title>
        <BodyText style={{ maxWidth: "254px" }}>
          {t("spaStaffing.testimonial.author")}
        </BodyText>
        <BodyText style={{ maxWidth: "254px" }}>
          {t("spaStaffing.testimonial.company")}
        </BodyText>
        <div className="quote-row"></div>
      </QuoteContainer>
      <SpaCallManagmentSection />
      <SpaCallToActionSection />
    </div>
  );
};

export default Page;
