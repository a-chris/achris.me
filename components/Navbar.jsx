import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import UnderlineHoverAnimation from "./animations/UnderlineHoverAnimation";
import Divider from "./Divider";

export default function Navbar() {
  const router = useRouter();

  return (
    <NavbarDiv>
      <NavbarLinksDiv>
        <NavbarLink
          text="HOME"
          href="/"
          isCurrentPage={router.pathname === "/"}
        />
        <NavbarLink
          text="PROGETTI"
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
        <Link href={href}>
          <StyledHtmlLink isCurrentPage={isCurrentPage}>{text}</StyledHtmlLink>
        </Link>
      </UnderlineHoverAnimation>
    </motion.div>
  );
}

const NavbarDiv = styled.div`
  padding: 0 10px;

  @media (min-width: 400px) {
    padding: 0 30px;
  }
`;

const NavbarLinksDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
  height: 50px;

  @media (min-width: 400px) {
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

  "@media (min-width: 400px)": {
    fontSize: "24px",
  },
}));
