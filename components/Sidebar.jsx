import styled from "@emotion/styled";
import React from "react";
import { MY_NAME } from "../contents";
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
];

export default function Sidebar() {
  return (
    <SidebarDiv>
      <MyName>
        {MY_NAME.split(" ").map((word, index) => (
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
  text-align: center;

  font-size: xx-large;

  @media (min-width: 400px) {
    font-size: xxx-large;
  }
`;

const MyPicture = styled.img`
  width: 110px;
  border-radius: 100%;

  @media (min-width: 400px) {
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

  @media (min-width: 400px) {
    flex-direction: column;
  }

  & > * {
    margin: 6px;
  }
`;

const StyledHtmlLink = styled.a`
  color: black;

  @media (min-width: 400px) {
    font-size: 24px;
  }
`;

const ContactLinkIcon = styled.img`
  width: 20px;
`;
