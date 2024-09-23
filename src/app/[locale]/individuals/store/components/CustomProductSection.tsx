"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { fetch } from "@/app/[locale]/individuals/store/api";
import Image from "next/image";
import { Grid } from "antd";
import Slider from "react-slick";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const Container = styled.div`
  min-height: 479px;
  border-width: 1px 0 0 0;
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  display: flex;
  flex-direction: column;
  gap: 40px; /* Use custom property or define explicitly */
  padding: 0 64px; /* Adjust as needed */
  gap: 16px;

  @media (max-width: 992px) {
    gap: 32px;
  }
`;

const TitleContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.span`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  color: #000000;
`;

const ListItem = styled.div`
  position: relative;
  width: 235.95px !important;
  height: 280.86px !important;
  border: 1px solid #849fbb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 600px) {
    width: 100% !important;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 235px;
  position: relative;
  z-index: 2;
`;

const LabelContainer = styled.div`
  background-color: white;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Label = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #2a2a2a;
`;
const ProductsContainer = () => {
  const screen = useBreakpoint();

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetch()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screen.lg ? 5 : 1,
    slidesToScroll: screen.lg ? 5 : 1,
    arrows: false,
  };

  const { t } = useTranslation();
  return (
    <Container>
      <TitleContainer>
        <Title>{t("storePage.products.title")}</Title>
      </TitleContainer>

      <Slider {...settings}>
        {products.map(
          (product: { url: string; label: string }, indx: number) => (
            <ListItem key={indx}>
              <ImageContainer>
                <Image
                  src={product.url}
                  alt={product.label}
                  layout="fill"
                  objectFit="contain"
                />
              </ImageContainer>
              <LabelContainer>
                <Label>{product.label}</Label>
              </LabelContainer>
            </ListItem>
          )
        )}
      </Slider>
    </Container>
  );
};

export default function Products() {
  return (
    <div>
      <ProductsContainer />
    </div>
  );
}
