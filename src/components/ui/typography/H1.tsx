"use client";
import styled from "styled-components";
const H1 = styled.span<{ color?: string }>`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  text-align: left;
  color: ${(props) => props.color || "black"};
`;

export default H1;
