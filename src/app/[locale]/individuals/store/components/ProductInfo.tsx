"use client";
import { Button, Flex, Grid, Space } from "antd";
import { IProducts } from "../models";
import Image from "next/image";
import StoreLearnMoreModal from "./modals/StoreLearnMoreModal";
import { useContext } from "react";
import { ProductListSectionContext } from "./ProductListSection";
import styled from "styled-components";
const { useBreakpoint } = Grid;

const Container = styled.div<{ isEvenIndex: boolean }>`
  display: flex;
  gap: 56px;
  flex-direction: ${(props) => (props.isEvenIndex ? "row" : "row-reverse")};

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

interface IProductInfoWithIndex extends IProducts {
  index: number;
  setIsOpen: any;
}
const ProductInfo = (props: IProductInfoWithIndex) => {
  const {
    setIsProductDescriptionModalOpen,
    setIsAddToCartModalOpen,
    setCurrentProduct,
  } = useContext(ProductListSectionContext);

  const screen = useBreakpoint();
  const isEvenIndex = props.index % 2 === 0;
  return (
    <Container isEvenIndex={isEvenIndex}>
      <Space
        direction="vertical"
        size={1}
        wrap
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={props.productMainPictureLink}
          alt={props.productName}
          layout={"fixed"}
          width={screen.lg ? 580 : 435}
          height={514}
        />
        <Space direction="horizontal">
          {props.productTinyPicturesLink.map((link, indx) => (
            <Image key={indx} src={link} alt={""} width={103} height={103} />
          ))}
        </Space>
      </Space>

      <Space direction="vertical" size={"large"}>
        {props.productTitle ? (
          <span
            style={{
              fontFamily: "Helvetica",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              color: "#0D99FF",
            }}
          >
            {props.productTitle}
          </span>
        ) : (
          <></>
        )}
        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "48px",
            textAlign: "left",
          }}
        >
          {props.productName}
        </span>
        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "left",
            color: "#0D99FF",
          }}
        >
          {props.price}
        </span>
        <Space direction="vertical" size={"small"} wrap>
          <span
            style={{
              fontFamily: "Helvetica",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
              textAlign: "left",
              color: "#2A2A2A",
            }}
          >
            {props.productDescription}
          </span>

          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {props.productBenefitsBulletPoints.map((content, indx) => (
              <li key={indx}>
                <span
                  style={{
                    fontFamily: "Helvetica",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    textAlign: "left",
                    color: "#2A2A2A",
                  }}
                >
                  {content}
                </span>
              </li>
            ))}
          </ul>
        </Space>
        <Flex gap={32}>
          <Button
            style={{
              width: "141px",
              height: "48px",
              padding: "12px 30px",
              gap: "10px",
              backgroundColor: "#0D99FF",
              borderRadius: 0,
            }}
            onClick={() => {
              setCurrentProduct(props);
              setIsProductDescriptionModalOpen(true);
            }}
          >
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                textAlign: "left",
                color: "white",
              }}
            >
              Know More
            </span>
          </Button>

          <Button
            style={{
              width: "139px",
              height: "48px",
              padding: "12px 30px",
              gap: "10px",
              border: "1px solid #0D99FF",
              borderColor: "#0D99FF",
              borderRadius: 0,
            }}
            onClick={() => {
              setCurrentProduct(props);
              setIsAddToCartModalOpen(true);
            }}
          >
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                textAlign: "left",
                color: "#0D99FF",
              }}
            >
              Add to cart
            </span>
          </Button>
        </Flex>
      </Space>
    </Container>
  );
};
export default ProductInfo;
