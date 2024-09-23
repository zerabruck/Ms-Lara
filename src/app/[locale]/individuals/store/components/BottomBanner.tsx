"use client";
import styled from "styled-components";
import { StyleObject } from "@/types/cssProps";
import { Grid } from "antd";
import Image from "next/image";

const { useBreakpoint } = Grid;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`;

const ImageContainer = styled.div<{
  imageWidth: string;
  imageHeight: string;
}>`
  width: ${(props) => props.imageWidth};
  height: ${(props) => props.imageHeight};
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #000000;
`;

const Card = ({
  imgSrc,
  textContent,
  imageWidth,
  imageHeight,
}: {
  imgSrc: string;
  textContent: any;
  imageWidth: string;
  imageHeight: string;
}) => {
  return (
    <Item>
      <ImageContainer imageWidth={imageWidth} imageHeight={imageHeight}>
        <Image
          src={imgSrc}
          alt={textContent}
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>

      <TextContainer>
        <Text>{textContent}</Text>
      </TextContainer>
    </Item>
  );
};

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  min-height: 372px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
`;

const BottomBanner = () => {
  const data = [
    {
      imgSrc: "/logo.svg",
      textContent: (
        <>
          <div>Same-day, in-home</div>
          <div>wellness treatments.</div>
        </>
      ),
      imageWidth: "106px",
      imageHeight: "70px",
    },
    {
      imgSrc: "/hyperice-logo 1.png",
      textContent: (
        <>
          <div>Percussion technology to</div>
          <div> transform the way you move.</div>
        </>
      ),
      // textContent: "Percussion technology to transform the way you move.",
      imageWidth: "204px",
      imageHeight: "107px",
    },
    {
      imgSrc: "/Group 152.png",
      textContent:
        "Zeel has partnered with Hyperice to deliver a comprehensive wellness experience – enhancing in-home treatments and offering technology for independent recovery and pain management.",
      imageWidth: "25.71px",
      imageHeight: "25.71px",
    },
  ];
  return (
    <Container>
      {data.map((item, index) => (
        <Card
          imgSrc={item.imgSrc}
          textContent={item.textContent}
          imageWidth={item.imageWidth}
          imageHeight={item.imageHeight}
          key={index}
        />
      ))}
    </Container>
  );
};

export default BottomBanner;
