"use client";
import styled from "styled-components";
import Image from "next/image";
import H5 from "@/components/ui/typography/H5";
import H1 from "@/components/ui/typography/H1";
import { useTranslation } from "react-i18next";

interface ICardData {
  imgSrc: string;
  tag: string;
  title: string;
  body: Array<string>;
  footer?: string;
  index: number;
}

const StyledTag = styled(H5)`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const StyledTitle = styled(H1)`
  font-family: Helvetica;
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    text-align: left;
  }
`;

const CardContainer = styled.div<{ index: number }>`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row" : "row-reverse")};
  gap: 5%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledList = styled.ul`
  @media screen and (max-width: 600px) {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 10px;
    & li::marker {
      color: #5e596d; /* Change this to your desired bullet color */
    }
  }
`;

const StyledBodyText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #555555;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const Card = ({ imgSrc, tag, title, body, footer, index }: ICardData) => (
  <CardContainer index={index} className="my-10">
    <Image src={imgSrc} width={540} height={514} alt={title} />
    <div className="flex flex-col justify-center gap-3">
      <StyledTag color="#0d99ff">{tag}</StyledTag>
      <StyledTitle>{title}</StyledTitle>

      <div className="flex flex-col">
        {/* Conditionally render body as header and list on small screens */}
        {body.length > 0 && (
          <>
            <StyledBodyText as="strong">{body[0]}</StyledBodyText>
            <StyledList>
              {body.slice(1).map((text, index) => (
                <li key={index}>
                  <StyledBodyText>{text}</StyledBodyText>
                </li>
              ))}
            </StyledList>
          </>
        )}
      </div>

      {footer && <StyledTag color="#0d99ff">{footer}</StyledTag>}
    </div>
  </CardContainer>
);

export default function SeventhSection() {
  const { t } = useTranslation();
  const baseNameSpace = "landing.seventhSection";
  const CardData: ICardData[] = [
    {
      imgSrc: "/providers/Group 149 (2).png",
      tag: t(`${baseNameSpace}.cardData.firstCard.tag`),
      title: t(`${baseNameSpace}.cardData.firstCard.title`),
      body: [
        t(`${baseNameSpace}.cardData.firstCard.body.sentense.first`),
        t(`${baseNameSpace}.cardData.firstCard.body.sentense.second`),
        t(`${baseNameSpace}.cardData.firstCard.body.sentense.third`),
        t(`${baseNameSpace}.cardData.firstCard.body.sentense.fourth`),
        t(`${baseNameSpace}.cardData.firstCard.body.sentense.fifth`),
      ],
      index: 0,
    },
    {
      imgSrc: "/providers/Group 159.png",
      tag: t(`${baseNameSpace}.cardData.secondCard.tag`),
      title: t(`${baseNameSpace}.cardData.secondCard.title`),
      body: [
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.first`),
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.second`),
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.third`),
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.fourth`),
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.fifth`),
        t(`${baseNameSpace}.cardData.secondCard.body.sentense.sixth`),
      ],
      footer: t(`${baseNameSpace}.cardData.secondCard.footer`),
      index: 1,
    },
    {
      imgSrc: "/providers/Group 372.png",
      tag: t(`${baseNameSpace}.cardData.thirdCard.tag`),
      title: t(`${baseNameSpace}.cardData.thridCard.title`),

      body: [
        t(`${baseNameSpace}.cardData.thridCard.body.sentense.first`),
        t(`${baseNameSpace}.cardData.thridCard.body.sentense.second`),
        t(`${baseNameSpace}.cardData.thridCard.body.sentense.third`),
        t(`${baseNameSpace}.cardData.thridCard.body.sentense.fourth`),
        t(`${baseNameSpace}.cardData.thridCard.body.sentense.fifth`),
      ],
      index: 2,
    },
    {
      imgSrc: "/providers/Group 373.png",
      tag: t(`${baseNameSpace}.cardData.fourthCard.tag`),
      title: t(`${baseNameSpace}.cardData.fourthCard.title`),

      body: [
        t(`${baseNameSpace}.cardData.fourthCard.body.sentense.first`),
        t(`${baseNameSpace}.cardData.fourthCard.body.sentense.second`),
        t(`${baseNameSpace}.cardData.fourthCard.body.sentense.third`),
        t(`${baseNameSpace}.cardData.fourthCard.body.sentense.fourth`),
        t(`${baseNameSpace}.cardData.fourthCard.body.sentense.fifth`),
      ],
      index: 3,
    },
  ];

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-start-2 col-end-12">
        {CardData.map((item, index) => (
          <Card
            key={index}
            imgSrc={item.imgSrc}
            tag={item.tag}
            title={item.title}
            body={item.body}
            footer={item.footer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
