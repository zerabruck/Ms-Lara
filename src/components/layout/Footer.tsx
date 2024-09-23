"use client";
import Image from "next/image";
import { Divider, Grid } from "antd";
import { StyleObject } from "@/types/cssProps";
import styled from "styled-components";
import H6 from "../ui/typography/H6";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  --margin-horizontal: 5vw;

  margin-left: var(--margin-horizontal);
  margin-right: var(--margin-horizontal);
  margin-top: 80px;
  padding-bottom: 24px;
  @media screen and (max-width: 600px) {
    --margin-horizontal: 10vw;

    margin-left: var(--margin-horizontal);
    margin-right: var(--margin-horizontal);
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 51px;
  height: 33px;
  position: relative;
`;

const IconListContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;

const Text = styled(H6)`
  lineheight: 16.01px;
  textalign: left;
  color: #656565;
`;

const BottomTextContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 8px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin-top: 16px;
  }
`;

const FullWidthDivider = styled(Divider)`
  width: 99vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;

export default function Footer({
  isTranslateable = false,
}: {
  isTranslateable?: boolean;
}) {
  const { t } = useTranslation();
  const styles: StyleObject = {
    icon: {
      width: "20px",
      height: "20px",
      position: "relative",
    },
  };

  return (
    <>
      <Container>
        <TopContainer>
          <Image src="/logo.svg" alt="Logo" width={86} height={33} />

          <IconListContainer>
            <Icon>
              <Image
                src="/Group.png"
                layout="fill"
                objectFit="contain"
                alt="Group"
              />
            </Icon>

            <div style={styles.icon}>
              <Image
                src="/linkedin.png"
                layout="fill"
                objectFit="contain"
                alt="LinkedIn"
              />
            </div>

            <Icon>
              <Image
                src="/Group (1).png"
                layout="fill"
                objectFit="contain"
                alt="Twitter"
              />
            </Icon>
            <Icon>
              <Image
                src="/Group 36.png"
                layout="fill"
                objectFit="contain"
                alt="Group 36"
              />
            </Icon>
          </IconListContainer>
        </TopContainer>
        <FullWidthDivider />
        <TopContainer>
          <BottomTextContainer>
            <Text>
              {isTranslateable ? t("footer.copyRight") : "Copyrights ©2024"}
            </Text>
            <Text>
              {isTranslateable
                ? t("footer.designer")
                : "designer. All Rights Reserved"}
            </Text>
          </BottomTextContainer>

          <BottomTextContainer>
            <Text>{isTranslateable ? t("footer.terms") : "Terms and Use"}</Text>
            <Text>
              {isTranslateable ? t("footer.privacy") : "Privacy Policy"}
            </Text>
          </BottomTextContainer>
        </TopContainer>
      </Container>
    </>
  );
}
