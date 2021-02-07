import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

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
      <ProjectImage src={imgSrc} />
      <ProjectContentDiv>
        <ProjectNameDiv>
          <h3 style={{ fontSize: "24px" }}>{name}</h3>
        </ProjectNameDiv>
        {link != null && (
          <Link href={link}>
            <a target="_blank">
              {link.replace("https://", "")}
              <img
                src="resources/link.svg"
                style={{ width: "20px", marginLeft: "10px" }}
              />
            </a>
          </Link>
        )}
        <ProjectDescription>{description}</ProjectDescription>
        <TechnologiesDiv>
          {technologies?.map((t) => (
            <Technology>{t}</Technology>
          ))}
        </TechnologiesDiv>
      </ProjectContentDiv>
    </ProjectDiv>
  );
}

const ProjectDiv = styled.div((props) => ({
  display: "flex",
  flexDirection: props.isOdd ? "row-reverse" : "row",
  margin: "60px 0",
}));

const ProjectContentDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 40px;
`;

const ProjectNameDiv = styled.div`
  display: flex;
`;

const ProjectImage = styled.img`
  border-radius: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
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
