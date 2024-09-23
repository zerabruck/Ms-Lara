"use client";

import styled from "styled-components";
import { ILink } from "./TopNav";
import { Drawer } from "antd";
import CustomLink from "./CustomLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default function DrawerNav({
  navLinks,
  isOpen,
  setIsOpen,
}: {
  navLinks: ILink[];
  isOpen: boolean;
  setIsOpen: any;
}) {
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement="left">
      <Container>
        {navLinks.map((item, index) => (
          <CustomLink label={item.label} url={item.url} key={index} />
        ))}
      </Container>
    </Drawer>
  );
}
