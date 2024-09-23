"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

const ReferalButton = styled.div`
  width: 300px;
  height: 40 px;
  padding: 8px 20px 8px 20px;
  background-color: #0d99ff;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: white;
`;
export default function ReferalButtonComponent() {
  const router = useRouter();
  return (
    <ReferalButton
      onClick={() => {
        router.push("/dropdown/referal");
      }}
    >
      <ButtonText>Have a Referral? Click Here</ButtonText>
    </ReferalButton>
  );
}
