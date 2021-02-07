import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Divider from "./Divider";

export default function Navbar(props) {
  const router = useRouter();

  return (
    <div style={{ padding: "0 30px" }}>
      <NavbarDiv {...props}>
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
      </NavbarDiv>
      <Divider />
    </div>
  );
}

function NavbarLink({ text, href, isCurrentPage }) {
  return (
    <Link href={href}>
      <StyledHtmlLink isCurrentPage={isCurrentPage}>{text}</StyledHtmlLink>
    </Link>
  );
}

const NavbarDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledHtmlLink = styled.a((props) => ({
  margin: "0 20px",
  fontSize: "24px",
  color: "black",
  transition: "font-weight 0.5s",
  fontWeight: props.isCurrentPage && "bold",
}));
