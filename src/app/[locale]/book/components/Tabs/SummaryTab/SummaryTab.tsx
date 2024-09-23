"use client";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import ClockImage from "../../../../../../../public/book-massage-images/teenyicons_clock-solid.png";
import MaterialSymbolImage from "../../../../../../../public/book-massage-images/material-symbols_id-card.png";
import EditImage from "../../../../../../../public/book-massage-images/mdi_edit (1).png";
import PlusImage from "../../../../../../public/book-massage-images/+.png";

import Image from "next/image";
import { Divider } from "antd";
import H6 from "@/components/ui/typography/H6";
import { useTranslation } from "react-i18next";
const ColumnHeaderText = styled.div`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const ColumnText = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const CardContainer = styled.div`
  width: 438px;
  height: 121px;
  box-shadow: 0px 4px 20px 0px #d0d0d066;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

interface ICardData {
  title: string;

  body?: string;
  imgSrc?: any;
  footer?: any;
}

const CardHeader = styled.span`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.9px;
  text-align: left;
`;

const BottomText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const ContinueButton = styled.div`
  width: 224px;
  height: 48px;
  background-color: #0d99ff;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function SummaryTab() {
  const { t } = useTranslation();
  const baseNameSpace = "tabs.finishTab.cards";
  const CardData: ICardData[] = [
    {
      title: t(`${baseNameSpace}.first.title`),
      body: t(`${baseNameSpace}.first.body`),
    },
    {
      title: t(`${baseNameSpace}.second.title`),
      body: t(`${baseNameSpace}.second.body`),
    },
    {
      title: t(`${baseNameSpace}.third.title`),
      footer: ["Thursday, July 25, 2024", "8:00am - 11:00am"],
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-2 mb-10">
        <H1>{t(`${baseNameSpace}.header`)}</H1>
      </div>
      <div className="sm:grid sm:grid-cols-12 gap-10">
        <div className="col-start-3 col-end-11 grid sm:grid-cols-2 grid-cols-1 gap-20 ">
          <div className="flex flex-col gap-10 ">
            <div className="flex items-center gap-5">
              <Image src={ClockImage} alt="clock" />
              <ColumnHeaderText>
                {t(`${baseNameSpace}.cancelHeader`)}
              </ColumnHeaderText>
            </div>
            <div className="flex flex-col">
              {CardData.map((item, index) => (
                <CardContainer key={index}>
                  <CardHeader>{item.title}</CardHeader>
                  <H6 color="#5E596D">{item.body}</H6>

                  {item.footer && (
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {item.footer.map((footer: string, key: any) => (
                        <H6 color="#5E596D" key={key}>
                          {footer}
                        </H6>
                      ))}
                    </div>
                  )}
                </CardContainer>
              ))}
            </div>
          </div>

          <div className="flex  flex-col gap-10">
            <div className="flex items-center gap-5">
              <Image src={MaterialSymbolImage} alt="Material symbol image" />
              <ColumnHeaderText>
                {t(`${baseNameSpace}.seeTherapistBio`)}
              </ColumnHeaderText>
            </div>
            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText>
                  {t(`${baseNameSpace}.memberSubscription`)}
                </ColumnText>
                <Image src={EditImage} alt="" />
              </div>
              <hr style={{ borderColor: "black", marginTop: "16px" }} />
            </div>
            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText> {t(`${baseNameSpace}.promoGift`)}</ColumnText>
              </div>
              <hr style={{ borderColor: "black", marginTop: "16px" }} />
            </div>
            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText style={{ color: "#858585" }}>
                  60-Minute Swedish{" "}
                </ColumnText>
                <ColumnText style={{ color: "#858585" }}>$119.00</ColumnText>
              </div>
            </div>

            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText style={{ color: "#0067B8" }}>
                  {t(`${baseNameSpace}.firstTimeDiscount`)}
                </ColumnText>
                <ColumnText style={{ color: "#0067B8" }}>-$25.00</ColumnText>
              </div>
            </div>

            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText style={{ color: "#858585" }}>18% Tip</ColumnText>
                <ColumnText style={{ color: "#858585" }}>$21.42</ColumnText>
              </div>
            </div>

            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText style={{ color: "#000000" }}>
                  {t(`${baseNameSpace}.dueToday`)}
                </ColumnText>
                <ColumnText style={{ color: "#858585" }}>$115.42</ColumnText>
              </div>
              <hr style={{ borderColor: "black", marginTop: "16px" }} />
            </div>

            <div className="flex  flex-col">
              <div className="flex justify-between">
                <ColumnText style={{ color: "#000000" }}>
                  {t(`${baseNameSpace}.monthly`)}
                </ColumnText>
                <ColumnText style={{ color: "#343030" }}>$140.42</ColumnText>
              </div>
              <hr style={{ borderColor: "black", marginTop: "16px" }} />
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-11">
          <BottomText style={{ color: "#858585" }}>
            {t(`${baseNameSpace}.discalimer.first`)}
          </BottomText>
        </div>
        <div className="col-start-3 col-end-11">
          <BottomText style={{ color: "#858585" }}>
            {t(`${baseNameSpace}.discalimer.second`)}
          </BottomText>
        </div>
        <div className="col-start-3 col-end-11 flex items-center justify-center">
          <ContinueButton> {t(`${baseNameSpace}.buttonText`)}</ContinueButton>
        </div>
      </div>
    </div>
  );
}
