"use client";

import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { Content } from "../types/types";
import { fetchContent } from "../api";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Item = styled.div`
  flex: 1 1 calc(50% - 16px);
  box-sizing: border-box;
  padding: 16px;
  text-align: center;
`;

export default function TabBody({
  method,
}: {
  method: () => Promise<Array<Content>>;
}) {
  const { t } = useTranslation();
  const baseNameSpace = "tabs.consumers.dropdowns";
  const [content, setContent] = useState<Array<Content>>([]);
  useEffect(() => {
    method()
      .then((res) => {
        setContent([
          {
            title: t(`${baseNameSpace}.inhome.header`),
            questions: [
              t(`${baseNameSpace}.inhome.questions.first`),
              t(`${baseNameSpace}.inhome.questions.second`),
              t(`${baseNameSpace}.inhome.questions.third`),
              t(`${baseNameSpace}.inhome.questions.fourth`),
              t(`${baseNameSpace}.inhome.questions.fifth`),
              t(`${baseNameSpace}.inhome.questions.sixth`),
            ],
          },
          {
            title: t(`${baseNameSpace}.membership.header`),
            questions: [
              t(`${baseNameSpace}.membership.questions.first`),
              t(`${baseNameSpace}.membership.questions.second`),
              t(`${baseNameSpace}.membership.questions.third`),
              t(`${baseNameSpace}.membership.questions.fourth`),
              t(`${baseNameSpace}.membership.questions.fifth`),
              t(`${baseNameSpace}.membership.questions.sixth`),
            ],
          },
          {
            title: t(`${baseNameSpace}.repeatBookings.header`),
            questions: [t(`${baseNameSpace}.repeatBookings.questions.first`)],
          },
          {
            title: t(`${baseNameSpace}.inhomeStretching.header`),
            questions: [
              t(`${baseNameSpace}.inhomeStretching.questions.first`),
              t(`${baseNameSpace}.inhomeStretching.questions.second`),
              t(`${baseNameSpace}.inhomeStretching.questions.third`),
            ],
          },
          {
            title: t(`${baseNameSpace}.trustAndSafety.header`),
            questions: [
              t(`${baseNameSpace}.trustAndSafety.questions.first`),
              t(`${baseNameSpace}.trustAndSafety.questions.second`),
              t(`${baseNameSpace}.trustAndSafety.questions.third`),
            ],
          },
          {
            title: t(`${baseNameSpace}.covidTesting.header`),
            questions: [t(`${baseNameSpace}.covidTesting.questions.first`)],
          },
        ]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      {content &&
        content.map((item, key) => (
          <Item key={key}>
            <Accordion {...item} />
          </Item>
        ))}
    </Container>
  );
}
