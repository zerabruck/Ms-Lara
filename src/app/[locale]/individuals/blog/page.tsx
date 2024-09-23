"use client";

import { Col, Row } from "antd";
import CallToAction from "./components/CallToAction";
import OurBlogSection from "./components/BlogsSection";
import SecondaryBlogList from "./components/SecondaryBlogList";
import CardsWithImageSection from "./components/CardsWithImageSection";

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
