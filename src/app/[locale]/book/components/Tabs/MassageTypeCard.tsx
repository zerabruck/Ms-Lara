"use client";

import H6 from "@/components/ui/typography/H6";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div<{ selected?: boolean }>`
  width: 355px;
  min-height: 215px;
  border-radius: 5px 0px 0px 0px;
  padding: 16px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient( 270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)"
      : "white"};

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export interface MassgeTypeInfo {
  imgSrc: any;
  title: string;
  text: string;
  bottomSection?: any;
}

const HeaderText = styled.span`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.9px;
  text-align: left;
`;

export default function MassageTypeCard(props: MassgeTypeInfo) {
  return (
    <Container>
      <InnerContainer>
        <Image src={props.imgSrc} alt={props.title} height={70} />
        <HeaderText>{props.title}</HeaderText>
        <H6 color="#5E596D">{props.text}</H6>
      </InnerContainer>
      {props.bottomSection && <>{props.bottomSection}</>}
    </Container>
  );
}
