import { Input } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
// Container for the input and button
const InputContainer = styled.div`
  display: flex;
  width: 431px;
  border-radius: 5px 0 0 0;
  border: 1px solid transparent;
`;

// Styled text input
const StyledInput = styled.input`
  width: 100%;
  height: 90%;
  border-radius: 5px 0 0 0;
  border: 1px solid transparent;
  padding-right: 180px; /* Space for the button */
  opacity: 0.7;
`;

// Styled button
const StyledButton = styled.button`
  width: 180px;
  height: 48px;
  background-color: #5e596d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 600px) {
    height: 30px;
    width: 127px;
    font-size: 10px;
  }
`;

const StyledText = styled.input`
  //styleName: H5-font-15;
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  padding-left: 5%;

  background-color: transparent;
  height: 100%;
  width: 70%;

  border: none; /* Remove border when not selected */
  outline: none; /* Remove default outline when selected */

  &:focus {
    border: none; /* Ensure no border when focused */
    outline: none; /* Ensure no outline when focused */
  }
  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 10px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: justified;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 65.51px;
  borderradius: 5px;
  border: 1px solid #858585;
  color: #5e596d;
  display: flex;
  alignitems: center;
  justifycontent: space-between;
  @media screen and (max-width: 600px) {
    width: 289px;
    height: 41.57px;
  }
`;

const InputButtonContainer = styled.div`
  width: 100%;
  height: 65.51px;
  border-radius: 5px 0 0 0;
  border: 1px solid #858585;
  color: #5e596d;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 41.57px;
  }
`;

const InputWithButton = () => {
  const { t } = useTranslation();
  return (
    <InputButtonContainer className="px-1">
      <StyledText placeholder="Enter your Zip Code Address" />
      <StyledButton>
        {t("landingPage.focalPoint.inputButton.text")}
      </StyledButton>
    </InputButtonContainer>
  );
};

export default InputWithButton;
