import H1 from "@/components/ui/typography/H1";
import { Divider } from "antd";
import styled from "styled-components";
import { useContext } from "react";
import { TabContext } from "@/app/[locale]/book/lib/TabContextProvider";
import { useTranslation } from "react-i18next";

const Button = styled.div`
  width: 200px;
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
  cursor: pointer;
`;

const SelectButton = styled(Button)`
  width: 297px;
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;
const PriceCard = styled.div<{ bgColor?: string }>`
  width: 352px;
  height: 459px;

  border-radius: 10px 0px 0px 0px;
  box-shadow: 0px 1px 12px 0px #00000040;
  display: flex;
  flex-direction: column;
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || "white"};
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const CardsContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const PriceText = styled.span`
  font-family: Helvetica;
  font-size: 50px;
  font-weight: 400;
  line-height: 64.75px;
  text-align: left;
`;
interface ICardData {
  header: string;
  secondaryHeader: string;
  price: string;
  contactInfo: string;
  bgColor?: string;
}
export default function PriceTab() {
  const { handleTabChange } = useContext(TabContext);
  const { t } = useTranslation();
  const baseNameSpace = "tabs.paymentTab";
  const CardsData: ICardData[] = [
    {
      header: t(`${baseNameSpace}.cards.first.header`),
      secondaryHeader: t(`${baseNameSpace}.cards.first.secondaryHeader`),
      price: "$129.00",
      contactInfo: "$129.00",
    },
    {
      header: t(`${baseNameSpace}.cards.second.header`),
      secondaryHeader: t(`${baseNameSpace}.cards.second.secondaryHeader`),
      price: "$119.00",
      contactInfo: t(`${baseNameSpace}.cards.second.contactInfo`),
      bgColor:
        "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)",
    },
    {
      header: t(`${baseNameSpace}.cards.third.header`),
      secondaryHeader: t(`${baseNameSpace}.cards.third.secondaryHeader`),
      price: "$109.00",
      contactInfo: t(`${baseNameSpace}.cards.third.contactInfo`),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-2 mb-10">
        <H1>Choose Your Pricing</H1>
        <Button>HSA/FSA Eligible</Button>
      </div>
      <CardsWrapper>
        <CardsContainer>
          {CardsData.map((item, index) => (
            <PriceCard key={index} bgColor={item.bgColor || "white"}>
              <H1>{item.header}</H1>
              <Text>{item.secondaryHeader}</Text>
              <PriceText>{item.price}</PriceText>
              <Text style={{ color: "#858585" }}>
                {t(`${baseNameSpace}.thisBooking`)}
              </Text>
              <Divider style={{ color: "#858585" }} />
              <div className="px-10 flex items-center">
                <Text style={{ color: "#858585", textAlign: "center" }}>
                  {item.contactInfo}
                </Text>
              </div>
              <SelectButton
                onClick={() => {
                  handleTabChange("5");
                }}
              >
                {t(`${baseNameSpace}.selectButton`)}
              </SelectButton>
            </PriceCard>
          ))}
        </CardsContainer>
      </CardsWrapper>
    </div>
  );
}
