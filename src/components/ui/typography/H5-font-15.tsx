"use client";

import styled from "styled-components";

const H5Font15 = styled.span<{ color?: string; align?: string }>`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: ${(props) => (props.align ? props.align : "center")};
  color: ${(props) => props.color || "black"};
`;

export default H5Font15;
