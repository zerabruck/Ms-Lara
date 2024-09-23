"use client";

import { Button, Modal } from "antd";
import Image from "next/image";
import styled from "styled-components";
import StyledDivider from "../StyledDivider";
import { useContext } from "react";

import ProductDetailsSections from "../ProductsDetailsSections";
import { ProductListSectionContext } from "../../ProductListSection";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    min-height: 898px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures content is spread and footer stays at the bottom */
    z-index: 1000;
    @media screen and (max-width: 600px) {
      padding: 20px;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
`;

const ProductInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductImageAndPriceSection = styled.div`
  display: flex;
  gap: 16px;
`;

const EditIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductNameAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductNameTextStyle = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2a2a2a;
`;

const ProductPriceTextStyle = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #0d99ff;
`;

const RecieptInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const CheckoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckoutButton = styled(Button)`
  width: 276px;
  height: 48px;
  padding: 12px 100px;
  background-color: #0d99ff;
  border: none;
  border-radius: 0px;
`;

const CheckoutButtonText = styled.span`
  color: white;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

const CenterAlignedInfoText = styled(Info)`
  text-align: center;
`;
const Footer = () => (
  <FooterContainer>
    <CheckoutButtonContainer>
      <CheckoutButton>
        <CheckoutButtonText>Check Out</CheckoutButtonText>
      </CheckoutButton>
    </CheckoutButtonContainer>
    <StyledDivider />

    <CenterAlignedInfoText>
      {`By selecting 'Check Out', I confirm that I have read and accept  Terms of Use and Privacy Policy`}
    </CenterAlignedInfoText>
  </FooterContainer>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows the container to grow and take available space */
`;

export default function AddToCartModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const { isAddToCartModalOpen, setIsAddToCartModalOpen, currentProduct } =
    useContext(ProductListSectionContext);

  return (
    <StyledModal
      open={isAddToCartModalOpen}
      width={575}
      footer={() => <Footer />}
      onCancel={() => setIsAddToCartModalOpen(false)}
      onClose={() => setIsAddToCartModalOpen(false)}
    >
      <Container>
        <HeaderContainer>
          <Header>Cart</Header>
        </HeaderContainer>

        <ProductInfoSection>
          <ProductImageAndPriceSection>
            <Image
              src={currentProduct && currentProduct.productTinyPicturesLink[2]}
              width={85}
              height={73}
              alt=""
            />
            <ProductNameAndPriceContainer>
              <ProductNameTextStyle>
                {currentProduct && currentProduct.productName}
              </ProductNameTextStyle>
              <ProductPriceTextStyle>
                {currentProduct && currentProduct.price}
              </ProductPriceTextStyle>
            </ProductNameAndPriceContainer>
          </ProductImageAndPriceSection>

          <EditIconContainer>
            <Image src={"/mdi_edit.png"} width={16} height={16} alt="" />
          </EditIconContainer>
        </ProductInfoSection>

        <StyledDivider />

        <RecieptInfoContainer>
          <Row>
            <Info>Sub Total</Info>
            <Info>$796.00</Info>
          </Row>
          <Row>
            <Info>Tax calculated at payment</Info>
            <Info>$--</Info>
          </Row>
          <Row>
            <Info>Shipping</Info>
            <Info>Shipping</Info>
          </Row>
        </RecieptInfoContainer>
        <StyledDivider />

        <Row>
          <Info>Total</Info>
          <Info>$796.00</Info>
        </Row>
      </Container>
    </StyledModal>
  );
}
