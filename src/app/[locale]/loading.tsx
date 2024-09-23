"use client";
import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;
export default function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}
