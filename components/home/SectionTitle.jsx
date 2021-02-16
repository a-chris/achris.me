import styled from "@emotion/styled";
import React from "react";

export default function SectionTitle({ text }) {
  return (
    <SectionTitleDiv>
      <SectionTitleText>{text}</SectionTitleText>
    </SectionTitleDiv>
  );
}

const SectionTitleDiv = styled.div`
  width: fit-content;
  border: 2px solid black;

  margin: 0 auto 20px auto;

  @media (min-width: 450px) {
    margin: 0 auto 40px auto;
  }
`;

const SectionTitleText = styled.h3`
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;

  padding: 5px 15px;
  font-size: medium;

  @media (min-width: 450px) {
    padding: 10px 30px;
    font-size: x-large;
  }
`;
