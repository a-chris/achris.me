import styled from "@emotion/styled";
import React from "react";
import breakpoints from "../../styles/breakpoints";

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
  background-color: white;

  margin: 0 auto 20px auto;

  ${breakpoints.sm} {
    margin: 0 auto 40px auto;
  }
`;

const SectionTitleText = styled.h3`
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;

  padding: 5px 15px;
  font-size: medium;

  ${breakpoints.sm} {
    padding: 10px 30px;
    font-size: x-large;
  }
`;
