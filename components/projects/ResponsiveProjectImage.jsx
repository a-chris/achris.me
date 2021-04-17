import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { createBreakpoint } from "react-use";

const breakpoints = {
  L: 1200,
  M: 750,
  S: 450,
};

const widths = {
  L: 600,
  M: 500,
  S: 300,
};

const useBreakpoint = createBreakpoint(breakpoints);

export default function ResponsiveProjectImage({ imgSrc }) {
  const bp = useBreakpoint();

  const width = widths[bp];
  const height = (3 / 4) * width;

  return (
    <ProjectImage
      src={`/resources/projects/${imgSrc}`}
      width={width}
      height={height}
      layout="fixed"
      quality={100}
      priority
    />
  );
}

const ProjectImage = styled(Image)`
  border-radius: 10px;
`;
