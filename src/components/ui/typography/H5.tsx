"use client";

import styled from "styled-components";

const H5 = styled.span<{
  color?: string;
  small?: boolean;
  lineHeight?: string;
}>`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: ${(props) => props.lineHeight || "22px"};
  letter-spacing: 0.01em;
  text-align: left;
  color: ${(props) => props.color || "black"};
`;

export default H5;
