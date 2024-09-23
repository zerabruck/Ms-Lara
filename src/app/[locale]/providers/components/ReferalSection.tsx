"use client";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Container = styled.div`
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  min-height: 316px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNameText = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center; /* Center align the text */
  color: #5e596d;
`;

const Name = styled.div`
  font-weight: 600; /* Make the name bold for distinction */
  margin-bottom: 4px; /* Add spacing between the name and title */
`;

const Title = styled.div`
  font-weight: 400; /* Regular weight for the title */
`;

interface IReferalData {
  name: string;
  title: string;
  text: string;
}

const CenterAlignedText = styled(H1)`
  text-align: center;
`;

const ReferalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 0 5rem;
  width: 80%;
`;

const StyledQuotes = styled.span`
  font-family: Helvetica;
  font-size: 100px;
`;
export default function ReferalSection() {
  const { t } = useTranslation();
  const baseNameSpace = "landing.referalSection.cardData";
  const referalData: IReferalData[] = [
    {
      name: t(`${baseNameSpace}.first.name`),
      title: t(`${baseNameSpace}.second.title`),
      text: t(`${baseNameSpace}.third.text`),
    },
    {
      name: t(`${baseNameSpace}.second.name`),
      title: t(`${baseNameSpace}.second.title`),
      text: t(`${baseNameSpace}.second.text`),
    },
    {
      name: t(`${baseNameSpace}.third.name`),
      title: t(`${baseNameSpace}.third.title`),
      text: t(`${baseNameSpace}.third.text`),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container className="sm:py-0 py-10">
      <Slider {...settings} className="w-full max-w-4xl">
        {referalData.map((data, index) => (
          <div className="flex flex-col items-center gap-10" key={index}>
            <div className="flex items-end justify-center">
              <Image
                src={"/providers/quotes.png"}
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center my-5 sm:px-0 px-10">
              <CenterAlignedText>{data.text}</CenterAlignedText>
            </div>
            <StyledNameText>
              <Title>{data.title}</Title>
            </StyledNameText>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
