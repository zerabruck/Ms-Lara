"use client";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  height: 416px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const ImageContainer = styled.div<{ imgSrc: string }>`
  position: relative;
  width: 100%;
  height: 255px;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */

  background-image: url("${(props) => props.imgSrc}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5%;
`;

const TextContainer = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #121212;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
  // @media screen and (max-width: 600px) {
  //   padding-left: 9%;
  // }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Ensures it takes the full width of the parent container */
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
  // @media screen and (max-width: 600px) {
  //   padding-left: 9%;
  //   padding-right: 8%;
  // }
`;

const MassageText = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  color: #242424;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const DateTextContainer = styled.div`
  display: flex;
  gap: 8px;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const DateText = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.54px;
  text-align: left;
  color: #242424;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const OurBlogCards = ({
  imgSrc,
  textContent,
  date,
}: {
  imgSrc: string;
  textContent: string;
  date: string;
}) => {
  return (
    <Container>
      <ImageContainer imgSrc={imgSrc}></ImageContainer>
      <TextContainer>{textContent}</TextContainer>
      <BottomContainer>
        <div>
          <MassageText>By Massage</MassageText>
        </div>
        <DateTextContainer>
          <Image src={"/clock.svg"} width={12} height={12} alt="clock" />
          <DateText>{date}</DateText>
        </DateTextContainer>
      </BottomContainer>
    </Container>
  );
};

export default OurBlogCards;
