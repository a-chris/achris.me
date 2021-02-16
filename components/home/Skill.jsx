import styled from "@emotion/styled";
import React from "react";

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
  @media (min-width: 450px) {
    font-size: 24px;
  }
`;
