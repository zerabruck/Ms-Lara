"use client";

import { Space, Grid, Flex } from "antd";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
const { useBreakpoint } = Grid;

const ProductsSection = () => {
  const screen = useBreakpoint();

  const [productList, setProductList] = useState([
    {
      label: "Hypersphere 2",
      url: "/productsImages/image 3 (2) 1.png",
    },
    {
      label: "Hyperice X",
      url: "/productsImages/image 3 (3) 1.png",
    },
    {
      label: "Hyperice X",
      url: "/productsImages/image 4 1.png",
    },
    {
      label: "Hypervolt Go 2",
      url: "/productsImages/image 5 1.png",
    },
    {
      label: "Normatec 3",
      url: "/productsImages/image 3 (3) 1.png",
    },
  ]);

  return (
    <Flex
      style={{
        height: "100%",
      }}
      vertical
      // justify="center"
    >
      <span
        style={{
          fontFamily: "Helvetica",
          fontSize: "25px",
          fontWeight: 400,
          lineHeight: "32.37px",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Products
      </span>
      <Space direction={screen.lg ? "horizontal" : "vertical"} size={80} wrap>
        {productList.map((product, indx) => (
          <Space
            key={indx}
            direction="vertical"
            size={1}
            wrap
            align="center"
            style={{
              width: "235",
            }}
          >
            <Image
              src={product.url}
              alt={product.label}
              height={233}
              width={170}
            />
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: "0.01em",
                textAlign: "center",
                color: "#2A2A2A",
              }}
            >
              {product.label}
            </span>
          </Space>
        ))}
      </Space>
    </Flex>
  );
};

export default ProductsSection;
