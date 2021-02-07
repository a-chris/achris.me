import styled from "@emotion/styled";
import React from "react";

export default function Language({ language }) {
  return (
    <LanguageDiv>
      <LanguageIcon src={`resources/${language.icon}`} />
      <LanguageName>{language.name}</LanguageName>
    </LanguageDiv>
  );
}

const LanguageDiv = styled.div`
  margin: 0 10px 10px 10px;

  @media (min-width: 400px) {
    margin: 0;
  }
`;

const LanguageIcon = styled.img`
  width: 70px;

  @media (min-width: 400px) {
    transition: filter 0.5s;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const LanguageName = styled.p`
  text-align: center;
  margin: 5px 0;
`;
