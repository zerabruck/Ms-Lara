import styled from "styled-components";

const Text = styled.span<{
  size?: string;
  color?: string;
  textAlign?: string;
  lineHeight?: string;
  fontWeight?: string;
}>`
  font-family: Helvetica;
  font-size: ${(props) => props.size || "24px"};
  font-weight: ${(props) => props.size || 900};
  line-height: ${(props) => props.lineHeight || "33.38px"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || "#222222"};
`;

export default Text;
