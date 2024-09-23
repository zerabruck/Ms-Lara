"use client";

import { Col, Row, Grid } from "antd";
import CallToAction from "@/app/[locale]/individuals/store/components/CallToAction";
import WhyTrustUsSection from "@/app/[locale]/individuals/store/components/WhyTrustUsSection";
import ProductListSection from "@/app/[locale]/individuals/store/components/ProductListSection";
import BottomBanner from "@/app/[locale]/individuals/store/components/BottomBanner";
import BottomNav from "@/components/layout/BottomNav";
import Products from "@/app/[locale]/individuals/store/components/CustomProductSection";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;
export default function Page() {
  const screen = useBreakpoint();
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col span={24}>
          <CallToAction />
        </Col>
      </Row>

      <Row>
        <Col offset={4} span={17}>
          <WhyTrustUsSection />
        </Col>
      </Row>

      <Products />

      <Row>
        <Col offset={2} span={20}>
          <ProductListSection />
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "32px",
          minHeight: "372px",

          width: "100%",
          background: screen.lg
            ? "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)"
            : "linear-gradient(3.6deg, rgba(209, 181, 255, 0.64) 24.78%, rgba(133, 171, 247, 0.557273) 53.9%, rgba(81, 164, 242, 0.5) 80.24%)",
        }}
      >
        <Col offset={1} span={22}>
          <BottomBanner />
        </Col>
      </Row>
    </>
  );
}
