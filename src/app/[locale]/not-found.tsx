"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
`;

const Heading = styled.h1`
  font-size: 96px;
  margin: 0;
  color: #343a40;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  margin: 16px 0;
  color: #6c757d;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 16px 0 32px;
  color: #6c757d;
`;

const HomeButton = styled.span`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Heading>404</Heading>
      <SubHeading>Page Not Found</SubHeading>
      <Description>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Description>
      <Link href="/" passHref>
        <HomeButton>Go to Homepage</HomeButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
