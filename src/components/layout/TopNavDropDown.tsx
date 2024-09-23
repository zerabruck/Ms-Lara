"use client";

import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LabelStyle = styled.span`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    z-index: 10001; /* Ensure it's above the top navigation */
  }
`;

const StyledMenu = styled(Menu)`
  z-index: 10001; /* Ensure dropdown menu is above navigation */
`;

export default function TopNavDropDown({
  isTranslateable = false,
}: {
  isTranslateable?: boolean;
}) {
  const [selectedLabel, setSelectedLabel] = useState("Inhome Services");
  const { t } = useTranslation();
  const items = [
    {
      key: "1",
      label: (
        <Link
          href={"/individuals/massage"}
          onClick={() => setSelectedLabel("Massage")}
        >
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.dropDowns.massage")
              : "Massage"}
          </LabelStyle>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href={"/veteran"}
          onClick={() => setSelectedLabel("Veteran Services")}
        >
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.dropDowns.massageForVeterans")
              : "Massage for Veterans"}
          </LabelStyle>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href={"/individuals/membership"}
          onClick={() => setSelectedLabel("Massage Membership")}
        >
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.dropDowns.massageMembership")
              : "Massage Membership"}
          </LabelStyle>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          href="/individuals/gifts"
          onClick={() => setSelectedLabel("Gifts")}
        >
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.dropDowns.gifts")
              : "Mrs. Lara Gifts"}
          </LabelStyle>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/refferal" onClick={() => setSelectedLabel("Referral")}>
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.dropDowns.referral")
              : "Referral"}
          </LabelStyle>
        </Link>
      ),
    },
  ];

  return (
    <DropdownWrapper>
      <Dropdown
        overlay={<StyledMenu items={items} />}
        placement="bottomRight"
        arrow
      >
        <div className="flex items-center space-x-2 cursor-pointer">
          <LabelStyle>
            {isTranslateable
              ? t("navBar.primaryNavBar.inhomeService")
              : "In-Home Service"}
          </LabelStyle>
          <CaretDownOutlined />
        </div>
      </Dropdown>
    </DropdownWrapper>
  );
}
