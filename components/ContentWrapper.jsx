import styled from "@emotion/styled";
import React from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "./Navbar";

export default function ContentWrapper({ children }) {
  return (
    <Main className={styles.main}>
      <Navbar />
      <ContentDiv>{children}</ContentDiv>
    </Main>
  );
}

const Main = styled.main`
  @media (min-width: 400px) {
    // margin-left needed due to the fixed sidebar
    margin-left: 35%;
  }
`;

const ContentDiv = styled.main`
  padding: 0 5%;
`;
