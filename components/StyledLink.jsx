import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export default function StyledLink({
  href,
  text,
  icon,
  iconPosition,
  fontSize,
}) {
  return (
    <Link passHref href={href} prefetch={false}>
      <StyledHtmlLink target="_blank" fontSize={fontSize}>
        {iconPosition === "before" && <ContactLinkIcon src={icon} />}
        {text}
        {iconPosition === "after" && <ContactLinkIcon src={icon} />}
      </StyledHtmlLink>
    </Link>
  );
}

const StyledHtmlLink = styled.a(({ fontSize }) => ({
  display: "flex",
  alignItems: "center",
  color: "black",
  margin: "3px 0",

  "@media (min-width: 400px)": {
    fontSize: fontSize || "24px",
  },
}));

const ContactLinkIcon = styled.img`
  width: 20px;
  margin: 0 3px;

  @media (min-width: 400px) {
    width: 30px;
    margin: 0 12px;
  }
`;
