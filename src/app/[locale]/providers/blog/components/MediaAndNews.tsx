"use client";

import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { news } from "../types/blog";
import { fetchNewsAndMedia } from "../api";
import H6 from "@/components/ui/typography/H6";

const Container = styled.div`
  min-height: 356px;
  background-color: #f8f8f8;
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 600px) {
    padding-top: 10%;
    padding-bottom: 15%;
    gap: 40px;
  }
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  flex-grow: 0;
`;

const ListItemContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ImageContainer = styled.div`
  width: 66px;
  height: 66px;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaIconsSection = styled.div`
  display: flex;
  gap: 16px;
  background-color: #f8f8f8;
  margin-top: 24px;
`;

const ListAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export default function MediaAndNewsSection() {
  const [news, setNews] = useState<Array<news>>([]);
  useEffect(() => {
    fetchNewsAndMedia()
      .then((res) => setNews(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <H1>Massage News & Media</H1>

      <ListAndIconContainer>
        {news &&
          news.map((item: news, index: number) => (
            <ListItemContainer key={index}>
              <Image src={item.imgSrc} width={66} height={66} alt="" />
              <TextContainer>
                <H6 color="#2A2A2A">{item.content}</H6>
              </TextContainer>
            </ListItemContainer>
          ))}

        <SocialMediaIconsSection>
          <Image
            src={"/Group 244.png"}
            width={40}
            height={40}
            alt="facebook icon"
          />
          <Image
            src={"/Group 244.png"}
            width={40}
            height={40}
            alt="linkedin icon"
          />
          <Image
            src={"/Group 245.png"}
            width={40}
            height={40}
            alt="twitter icon"
          />
          <Image
            src={"/Group 246.png"}
            width={40}
            height={40}
            alt="instagram icon"
          />
        </SocialMediaIconsSection>
      </ListAndIconContainer>
    </Container>
  );
}
