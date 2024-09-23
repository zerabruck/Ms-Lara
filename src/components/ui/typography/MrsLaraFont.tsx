import styled from "styled-components";

const MrsLaraFont = styled.span<{ color?: string }>`
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 900;
  line-height: 33.38px;
  text-align: left;
  color: ${(props) => props.color || "#222222"};
`;

export default MrsLaraFont;
