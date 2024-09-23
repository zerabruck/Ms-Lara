"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 5%;
  grid-column-start: 1;
  grid-column-end: 7;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2a2a2a;
`;

const SpecItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;

export default function SpecificationSection({
  specs,
}: {
  specs: Array<{ key: string; value: string }>;
}) {
  return (
    <Wrapper>
      <Container>
        <Header>Specifications</Header>
        <SpecItemList>
          {specs &&
            specs.map((item, key) => (
              <SpecItem key={key}>
                <Text>{item.key}</Text>

                <Text>{item.value}</Text>
              </SpecItem>
            ))}
        </SpecItemList>
      </Container>
    </Wrapper>
  );
}
