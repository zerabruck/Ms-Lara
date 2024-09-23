"use client";

import { useState, useEffect, createContext } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import ProductInfo from "./ProductInfo";
import { IProducts } from "../models";
import { Space, Grid } from "antd";
import StoreLearnMoreModal from "./modals/StoreLearnMoreModal";
import AddToCartModal from "./modals/AddToCart/AddToCartModal";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
`;
export const ProductListSectionContext = createContext<
  | any
  | {
      isAddToCartModalOpen: boolean;
      setIsAddToCartModalOpen: any;
      isProductDescriptionModalOpen: boolean;
      setIsProductDescriptionModalOpen: any;
      currentProduct: any;
      setCurrentProduct: any;
    }
>(null);

const { useBreakpoint } = Grid;

const ProductListSection = () => {
  const [isProductDescriptionModalOpen, setIsProductDescriptionModalOpen] =
    useState(false);

  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);
  const [productList, setProductList] = useState<Array<IProducts>>([]);
  const screen = useBreakpoint();

  useEffect(() => {
    fetchProducts().then((res) => setProductList(res));
  }, []);
  return (
    <ProductListSectionContext.Provider
      value={{
        isAddToCartModalOpen,
        setIsAddToCartModalOpen,
        isProductDescriptionModalOpen,
        setIsProductDescriptionModalOpen,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {/* <Space
        direction="vertical"
        size={screen.lg ? 40 : 40}
        style={{
          paddingTop: "40px",
        }}
      > */}

      <Container>
        <AddToCartModal
          isOpen={isAddToCartModalOpen}
          setIsOpen={(inp: boolean) => setIsAddToCartModalOpen(inp)}
        />

        <StoreLearnMoreModal
          isOpen={isProductDescriptionModalOpen}
          setIsOpen={(inp: boolean) => setIsProductDescriptionModalOpen(inp)}
          setIsAddToCartModalOpen={(inp: boolean) =>
            setIsAddToCartModalOpen(inp)
          }
        />

        {productList.map((product, indx) => (
          <ProductInfo
            {...product}
            key={indx}
            index={indx}
            setIsOpen={(inp: boolean) => {
              console.log(inp);
              setIsProductDescriptionModalOpen(true);
            }}
          />
        ))}
      </Container>
      {/* </Space> */}
    </ProductListSectionContext.Provider>
  );
};

export default ProductListSection;
