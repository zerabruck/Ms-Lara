import Link from "next/link";
import { ILink } from "./TopNav";
import H6 from "../ui/typography/H6";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const StyledText = styled(H6)<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#0D99FF" : "#343030")};
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export interface ILinkWithOptionalComponent extends ILink {
  component?: React.ReactNode;
}

export default function CustomLink(props: ILinkWithOptionalComponent) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      {props.component ? (
        <>{props.component}</>
      ) : (
        // <Link href={props.url}>
        <StyledText
          isSelected={pathName == props.url}
          onClick={() => {
            router.push(props.url);
          }}
        >
          {props.label}
        </StyledText>
        // </Link>
      )}
    </>
  );
}
