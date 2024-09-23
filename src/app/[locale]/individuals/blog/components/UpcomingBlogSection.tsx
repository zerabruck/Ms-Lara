"use client";

import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { upcomingBlogs } from "../types/blog";
import { fetchUpcomingBlogData } from "../api";

const Container = styled.div`
  height: 356px;
  background-color: #f8f8f8;

  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageContainer = styled.div<{ imgSrc: string }>`
  position: relative;
  width: 100%;
  height: 128px;
  background-image: url("${(props) => props.imgSrc}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5%;
  // @media screen and (max-width: 600px) {
  //   min-width: 273px;
  // }
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  flex-grow: 0;
`;

const StyledHeader = styled(H1)`
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function UpcomingBlogs() {
  const [blogList, setBlogList] = useState<upcomingBlogs[]>([]);

  useEffect(() => {
    fetchUpcomingBlogData()
      .then((res) => setBlogList(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <StyledHeader>Upcoming Blogs</StyledHeader>

      {blogList.map((item, index) => (
        <>
          <ImageContainer imgSrc={item.imgSrc} />
          <TextContainer>
            <Text>{item.content}</Text>
            <Text>Read more</Text>
          </TextContainer>
        </>
      ))}
    </Container>
  );
}
