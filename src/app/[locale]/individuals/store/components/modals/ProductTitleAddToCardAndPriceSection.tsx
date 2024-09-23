"use client";

import { useContext } from "react";
import styled from "styled-components";
import { ProductListSectionContext } from "../ProductListSection";

const ProductTitleAddToCartAndPriceSection = styled.div`
  display: flex;

  justify-content: space-between;
  min-height: 80px;
  padding-top: 32px;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

const TitleAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductNameText = styled.span`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: #2a2a2a;
`;

const ProductShortDescriptionAndPriceContainer = styled.div`'
  display:flex;
  flex-direction: column;
  gap:16px;

`;
const ProductShortDescriptionText = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #2a2a2a;
`;

const ProductPriceText = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #0d99ff;
`;

const AddToCartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddToCartButton = styled.div`
  width: Hug (282px) px;
  height: Hug (48px) px;
  padding: 12px 100px 12px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d99ff;

  @media screen and (max-width: 600px) {
    width: Hug (202px) px;
    height: Hug (44px) px;
    padding: 10px 60px 10px 60px;
  }
`;

const AddToCardButtonText = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #ffffff;
`;

export default function ProductTitleAddToCardAndPriceSection({
  productName,
  productShortDescriptionText,
  productPriceText,
}: {
  productName: string;
  productShortDescriptionText: string;
  productPriceText: string;
}) {
  const { setIsAddToCartModalOpen, setIsProductDescriptionModalOpen } =
    useContext(ProductListSectionContext);

  return (
    <ProductTitleAddToCartAndPriceSection>
      <TitleAndPriceContainer>
        <ProductNameText>{productName}</ProductNameText>
        <ProductShortDescriptionAndPriceContainer>
          <ProductShortDescriptionText>
            {productShortDescriptionText}
          </ProductShortDescriptionText>
          <ProductPriceText>{productPriceText}</ProductPriceText>
        </ProductShortDescriptionAndPriceContainer>
      </TitleAndPriceContainer>
      <AddToCartButtonContainer>
        <AddToCartButton
          onClick={() => {
            setIsAddToCartModalOpen(true);
            setIsProductDescriptionModalOpen(false);
          }}
        >
          <AddToCardButtonText>Add to Cart</AddToCardButtonText>
        </AddToCartButton>
      </AddToCartButtonContainer>
    </ProductTitleAddToCartAndPriceSection>
  );
}
