"use client";

import styled from "styled-components";

const H2 = styled.span<{ color?: string }>`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.9px;
  text-align: left;
  color: ${(props) => props.color || "black"};
`;

export default H2;
