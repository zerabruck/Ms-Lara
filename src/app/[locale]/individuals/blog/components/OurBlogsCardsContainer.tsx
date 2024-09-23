"use client";
import styled from "styled-components";
import OurBlogCards from "./OurBlogsSectionCard";
import { useEffect, useState } from "react";
import { blog } from "../types/blog";
import { fecthBlogs } from "../api";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function OurBlogsCardsContainer() {
  const [blogs, setBlogs] = useState<Array<blog>>([]);
  useEffect(() => {
    fecthBlogs()
      .then((res) => setBlogs(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      {blogs &&
        blogs.map((item: blog, index) => (
          <OurBlogCards
            imgSrc={item.imgSrc}
            textContent={item.content}
            date={item.date}
            key={index}
          />
        ))}
    </Container>
  );
}
