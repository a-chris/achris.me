import styled from "@emotion/styled";
import React from "react";
import breakpoints from "../../styles/breakpoints";

export default function Skill({ name, icon }) {
  return (
    <SkillDiv>
      <SkillIcon src={`resources/icons/${icon}`} />
      <SkillName>{name}</SkillName>
    </SkillDiv>
  );
}

const SkillDiv = styled.div`
  display: flex;
`;

const SkillIcon = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const SkillName = styled.p`
  ${breakpoints.sm} {
    font-size: 24px;
  }
`;
