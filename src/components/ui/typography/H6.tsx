"use client";
import styled from "styled-components";

const H6 = styled.span<{ color?: string }>`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${(props) => props.color || "black"};
`;

export default H6;
