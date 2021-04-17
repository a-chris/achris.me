import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import breakpoints from "../../styles/breakpoints";
import LinkWithIcon from "../LinkWithIcon";
import ProjectCarousel from "./ProjectCarousel";

export default function Project({
  name,
  description,
  technologies,
  imgSrc,
  link,
  gitHub,
  isOdd,
}) {
  const { t } = useTranslation();

  return (
    <ProjectDiv isOdd={isOdd}>
      <ProjectCarousel images={[imgSrc]} />
      <ProjectContentDiv isOdd={isOdd}>
        <ProjectNameDiv>
          <ProjectTitle>{name}</ProjectTitle>
        </ProjectNameDiv>
        {gitHub && (
          <LinkWithIcon
            href={gitHub}
            text={t("GITHUB_LINK")}
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
  text-transform: uppercase;
  font-size: 24px;
  margin: 5px 0;
`;

const ProjectDiv = styled.div(({ isOdd }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  margin: "20px 0",

  [breakpoints.sm]: {
    margin: "40px 0",
  },
  // [breakpoints.lg]: {
  //   flexDirection: isOdd ? "row-reverse" : "row",
  // },
}));

const ProjectContentDiv = styled.div(({ isOdd }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",

  padding: "20px 0",

  // [breakpoints.md]: {
  //   padding: isOdd ? "20px 40px 20px 0" : "20px 0 20px 40px",
  // },
}));

const ProjectNameDiv = styled.div`
  display: flex;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
`;

const ProjectDescription = styled.p`
  line-height: 1.7;
  text-align: justify;
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
