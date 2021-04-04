import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export default function LinkWithIcon({
  href,
  text,
  icon,
  iconPosition,
  fontSize,
  ...props
}) {
  return (
    <Link passHref href={href} prefetch={false} {...props}>
      <StyledHtmlLink target="_blank" fontSize={fontSize}>
        {iconPosition === "before" && (
          <Icon src={icon} position={iconPosition} />
        )}
        {text}
        {iconPosition === "after" && (
          <Icon src={icon} position={iconPosition} />
        )}
      </StyledHtmlLink>
    </Link>
  );
}

const StyledHtmlLink = styled.a(({ fontSize }) => ({
  display: "flex",
  alignItems: "center",
  color: "black",
  margin: "3px 0",

  "@media (min-width: 450px)": {
    fontSize: fontSize || "24px",
  },
}));

const Icon = styled.img(({ position }) => ({
  width: "20px",
  margin: "0 3px",

  "@media (min-width: 450px)": {
    width: "30px",
    margin: position === "before" ? "0 12px 0 0" : "0 0 0 12px",
  },
}));
