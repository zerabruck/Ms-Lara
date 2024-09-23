"use client";

import Image from "next/image";
import styled from "styled-components";
import { Grid } from "antd";
import { splashCards } from "../types/blog";
import { useEffect, useState } from "react";
import { fetchSecondaryBlogs } from "../api";

const { useBreakpoint } = Grid;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 32px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 7%;
    padding-right: 7%;
  }
  margin-top: 5%;
`;

const ShowMoreBlogsButtonContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 22;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

const ShowMoreBlogsButton = styled.div`
  width: Hug (184px) px;
  height: Hug (48px) px;
  padding: 12px 30px 12px 30px;
  background-color: #0d99ff;
  color: white;
`;

const List = styled.div`
  grid-column-start: 4;
  grid-column-end: 23;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BlogItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media screen and (max-width: 600px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ImageContainer = styled.div<{ imgSrc?: string }>`
  grid-column-start: 1;
  grid-column-end: 6;
  position: relative;
  width: 466px;
  height: 309px;
  background-image: url("${(props) => props.imgSrc}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // @media screen and (max-width: 600px) {
  //   width: 306px;
  width: 100%;
  // }
`;

const TextContentContainer = styled.div`
  grid-column-start: 7;
  grid-column-end: 13;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    align-items: center;
  }

  gap: 8px;
`;

const AuthorText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;

  color: #0d99ff;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;

const BlogTitle = styled.span`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;

  color: #2a2a2a;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const BlogBodyAndDateInfoContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const BlogBody = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #8a8a8a;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #8a8a8a;
    // padding-left: 10%;
    padding-right: 5%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

const ByMassageText = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  text-align: left;
  color: #242424;
`;

const MassageText = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.13px;
  color: #242424;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const DateTextContainer = styled.div`
  display: flex;
  gap: 8px;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const DateText = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.54px;
  text-align: left;
  color: #242424;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
`;

const BottomContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
  width: 60%;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

const BottomContainerWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export default function SecondaryBlogList() {
  const screen = useBreakpoint();

  const [blogList, setBlogLists] = useState<splashCards[]>([]);

  useEffect(() => {
    fetchSecondaryBlogs()
      .then((res) => setBlogLists(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Wrapper>
      <List>
        {blogList.map((item, key) => (
          <BlogItemContainer key={key}>
            <ImageContainer imgSrc={item.imgSrc} />

            <TextContentContainer>
              <AuthorText>{item.category}</AuthorText>
              <BlogTitle>{item.title}</BlogTitle>
              <BlogBodyAndDateInfoContainer>
                <BlogBody>{item.body}</BlogBody>
                <BottomContainerWrapper>
                  <BottomContainer>
                    <ByMassageText>{item.author}</ByMassageText>
                    <DateContainer>
                      <Image
                        src={"/clock.svg"}
                        width={12}
                        height={12}
                        alt="clock"
                      />
                      <DateText>{item.date}</DateText>
                    </DateContainer>
                  </BottomContainer>
                </BottomContainerWrapper>
              </BlogBodyAndDateInfoContainer>
            </TextContentContainer>
          </BlogItemContainer>
        ))}
      </List>
      <ShowMoreBlogsButtonContainer>
        <ShowMoreBlogsButton>Show more blogs</ShowMoreBlogsButton>
      </ShowMoreBlogsButtonContainer>
    </Wrapper>
  );
}
