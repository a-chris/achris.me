import styled from "@emotion/styled";
import React from "react";

export default function Sidebar() {
  return (
    <SidebarDiv>
      <MyName>CHRISTIAN TOSCANO</MyName>
      <MyPicture src="resources/my_pic.png" />
      <ContactsDiv>
        <StyledHtmlLink href="https://github.com/a-chris" target="_blank">
          <ContactLinkIcon src="resources/github.svg" />
          GitHub
        </StyledHtmlLink>
        <StyledHtmlLink
          href="https://www.linkedin.com/in/a-chris/"
          target="_blank"
        >
          <ContactLinkIcon src="resources/linkedin.svg" />
          Linkedin
        </StyledHtmlLink>
        <StyledHtmlLink
          href="https://medium.com/@a.christian.toscano"
          target="_blank"
        >
          <ContactLinkIcon src="resources/medium.svg" />
          Medium
        </StyledHtmlLink>
      </ContactsDiv>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: #c8d0d7;

  width: 100%;

  @media (min-width: 400px) {
    width: 35%;
  }
`;

const MyName = styled.h2`
  font-size: xxx-large;
  text-align: center;
`;

const MyPicture = styled.img`
  width: 150px;
  border-radius: 100%;

  @media (min-width: 400px) {
    width: 200px;
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
    width: 35%;
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
