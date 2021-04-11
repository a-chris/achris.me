import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import useTranslation from "../hooks/useTranslation";
import UnderlineHoverAnimation from "./animations/UnderlineHoverAnimation";
import Divider from "./Divider";

const LANGUAGES_FLAGS = {
  it: "flag_italy.svg",
  en: "flag_uk.svg",
};

export default function Navbar() {
  const router = useRouter();
  const { t, language, setLanguage } = useTranslation();

  const flagIcon = LANGUAGES_FLAGS[language];

  const toggleLanguage = useCallback(
    () => setLanguage(language === "it" ? "en" : "it"),
    [language]
  );

  return (
    <NavbarDiv>
      <NavbarLinksDiv>
        <NavbarLanguageFlag
          src={`/resources/icons/${flagIcon}`}
          onClick={toggleLanguage}
        />
        <NavbarLink
          text="HOME"
          href="/"
          isCurrentPage={router.pathname === "/"}
        />
        <NavbarLink
          text={t("NAVBAR_PROJECTS")}
          href="/projects"
          isCurrentPage={router.pathname === "/projects"}
        />
      </NavbarLinksDiv>
      <Divider />
    </NavbarDiv>
  );
}

function NavbarLink({ text, href, isCurrentPage }) {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <UnderlineHoverAnimation>
        <Link passHref href={href}>
          <StyledHtmlLink isCurrentPage={isCurrentPage}>{text}</StyledHtmlLink>
        </Link>
      </UnderlineHoverAnimation>
    </motion.div>
  );
}

const NavbarDiv = styled.div`
  padding: 0 10px;

  @media (min-width: 450px) {
    padding: 0 30px;
  }
`;

const NavbarLanguageFlag = styled.img`
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const NavbarLinksDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
  height: 50px;

  @media (min-width: 450px) {
    justify-content: flex-end;
    height: 80px;
  }
`;

const StyledHtmlLink = styled.a(({ isCurrentPage }) => ({
  margin: "0 20px",
  color: "black",
  transition: "font-weight 0.5s",
  fontWeight: isCurrentPage && "bold",

  fontSize: "20px",

  "@media (min-width: 450px)": {
    fontSize: "24px",
  },
}));
