import styled from "@emotion/styled";
import React from "react";
import useTranslation from "../hooks/useTranslation";
import UnderlineHoverAnimation from "./animations/UnderlineHoverAnimation";
import LinkWithIcon from "./LinkWithIcon";

const CONTACTS = [
  {
    href: "https://github.com/a-chris",
    text: "GitHub",
    icon: "resources/icons/github.svg",
    iconPosition: "before",
  },
  {
    href: "https://www.linkedin.com/in/a-chris",
    text: "Linkedin",
    icon: "resources/icons/linkedin.svg",
    iconPosition: "before",
  },
  {
    href: "https://medium.com/@a.christian.toscano",
    text: "Medium",
    icon: "resources/icons/medium.svg",
    iconPosition: "before",
  },
  {
    href: "mailto:a.christian.toscano@gmail.com",
    text: "E-mail",
    icon: "resources/icons/email.svg",
    iconPosition: "before",
  },
];

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <SidebarDiv>
      <MyName>
        {t("MY_NAME")
          .split(" ")
          .map((word, index) => (
            <div key={index}>{word}</div>
          ))}
      </MyName>
      <MyPicture src="resources/my_pic.png" />
      <ContactsDiv>
        {CONTACTS.map((c, index) => (
          <UnderlineHoverAnimation key={index}>
            <LinkWithIcon {...c} />
          </UnderlineHoverAnimation>
        ))}
      </ContactsDiv>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: #c8d0d7;
`;

const MyName = styled.h2`
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;

  font-size: xx-large;

  @media (min-width: 450px) {
    font-size: xxx-large;
  }
`;

const MyPicture = styled.img`
  width: 110px;
  border-radius: 100%;

  @media (min-width: 450px) {
    width: 180px;
    filter: grayscale(1);
    transition: filter 0.5s;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const ContactsDiv = styled.div`
  display: flex;
  text-align: center;
  margin-top: 20px;

  flex-direction: row;

  @media (min-width: 450px) {
    flex-direction: column;
  }

  & > * {
    margin: 6px;
  }
`;
