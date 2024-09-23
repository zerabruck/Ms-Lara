"use client";
import { Button } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 50px;
  padding-top: 150px;
  gap: 40px;

  
`;

const StyledButton = styled(Button)`
  width: 120px;
  height: 30.38px;
  border-radius: 5px;
  opacity: 0px;
  background-color: #0d99ff;
  color: white;
  border-color: #0d99ff;
`;

const InnerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
`;

const ListItem = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #000000;
`;
export default function SideBar() {
  const items = [
    "Password",
    "Free massage",
    "Address",
    "Credit Cards",
    "People",
    "My Appointments",
    "My Orders",
    "Zeel Credits",
    "My Therapist",
    "Email Preferences",
    "Data Request",
  ];

  return (
    <Container>
      <StyledButton>Account</StyledButton>
      <InnerList>
        {items.map((item, indx) => (
          <ListItem key={indx}>{item}</ListItem>
        ))}
      </InnerList>
    </Container>
  );
}
