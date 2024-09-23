"use client";

import { Col, Row, Space, Grid } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchSplashCardsData } from "../api";
import { splashCards } from "../types/blog";
import Slider from "react-slick";
const { useBreakpoint } = Grid;

const Container = styled(Col)`
  background: linear-gradient(
    180deg,
    rgba(228, 218, 243, 0.64) 0%,
    rgba(134, 124, 151, 0.3712) 100%
  );
  min-height: 208px;
`;

const StyledRow = styled(Row)`
  background-image: url("/blogFocalPointPic.png");
  height: 506px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CallToAction = () => {
  const screen = useBreakpoint();
  const style = {
    backgroundImage: "url('/blogFocalPointPic.png')",
    height: "506px",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [data, setData] = useState<splashCards[]>([]);

  useEffect(() => {
    fetchSplashCardsData()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledRow align={"middle"}>
      <Container offset={2} lg={9} sm={20} xs={20}>
        <Space
          style={{
            width: "100%",
            height: "100%",
            padding: "24px",
          }}
          direction="vertical"
        >
          <span
            style={{
              fontFamily: "Helvetica",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              color: "#0067B8",
            }}
          >
            {/** data.category */}
            LIFESTYLE MASSAGE
          </span>

          <span
            style={{
              fontFamily: "Helvetica",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "32.37px",
              textAlign: "left",
              color: "#242424",
            }}
          >
            {/**data.title */}
            Seld-Massage Techniques to Keep Your Travel Adventures Fun and
            Pain-Free
          </span>

          <Space direction="vertical" size={"middle"}>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "18.13px",
                textAlign: "left",
              }}
            >
              {/*data.author*/}
              By MELANIE PEDDLE
            </span>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "15.54px",
                textAlign: "left",
                color: "#242424",
              }}
            >
              {/**data.date */}
              30,Jan 2021
            </span>
          </Space>
        </Space>
      </Container>
    </StyledRow>
  );
};
export default CallToAction;
