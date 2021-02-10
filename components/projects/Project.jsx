import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StyledLink from "../StyledLink";

export default function Project({
  name,
  description,
  technologies,
  imgSrc,
  link,
  gitHub,
  isOdd,
}) {
  return (
    <ProjectDiv isOdd={isOdd}>
      <div style={{ margin: "auto" }}>
        <ProjectImage
          src={`/resources/projects/${imgSrc}`}
          width={800}
          height={600}
          layout="intrinsic"
        />
      </div>
      <ProjectContentDiv>
        <ProjectNameDiv>
          <ProjectTitle>{name}</ProjectTitle>
        </ProjectNameDiv>
        {gitHub && (
          <StyledLink
            href={gitHub}
            text="Visita su GitHub"
            icon="resources/icons/github.svg"
            iconPosition="before"
            fontSize="18px"
          />
        )}
        {link != null && (
          <Link href={link}>
            <a target="_blank">
              {link.replace("https://", "")}
              <img
                src="resources/icons/link.svg"
                style={{ width: "20px", marginLeft: "10px" }}
              />
            </a>
          </Link>
        )}
        <ProjectDescription>{description}</ProjectDescription>
        <TechnologiesDiv>
          {technologies?.map((t, index) => (
            <Technology key={index}>{t}</Technology>
          ))}
        </TechnologiesDiv>
      </ProjectContentDiv>
    </ProjectDiv>
  );
}

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin: 5px 0;
`;

const ProjectDiv = styled.div(({ isOdd }) => ({
  display: "flex",
  flexDirection: "column-reverse",

  "@media(min-width: 400px)": {
    margin: "60px 0",
  },
  "@media(min-width: 1200px)": {
    flexDirection: isOdd ? "row-reverse" : "row",
  },
}));

const ProjectContentDiv = styled.div(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",

  padding: "20px 0",

  "@media(min-width: 700px)": {
    padding: "20px 40px",
  },
}));

const ProjectNameDiv = styled.div`
  display: flex;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
`;

const ProjectDescription = styled.p`
  line-height: 1.7;
`;

const TechnologiesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 8px;
  }

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const Technology = styled.span`
  font-size: 13px;
  border: 1px solid black;
  border-radius: 30px;
  padding: 5px 15px;
`;
