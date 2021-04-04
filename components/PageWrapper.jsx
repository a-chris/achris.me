import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useLanguage from "../hooks/useLanguage";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageWrapper({ children }) {
  const { t } = useLanguage();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <RootDiv>
      <Head>
        <title>{t("MY_NAME")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <PageContainerDiv>
        <SidebarDiv>
          <motion.div
            style={{ height: "inherit", boxShadow: "0px 0px 18px -3px black" }}
            initial={{ width: 0 }}
            animate={{ width: isMounted ? "auto" : 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            <Sidebar />
          </motion.div>
        </SidebarDiv>

        <Main>
          <Navbar />

          <ContentDiv>{children}</ContentDiv>
        </Main>
      </PageContainerDiv>

      <footer />
    </RootDiv>
  );
}

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContainerDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: #f7f7f7;

  flex-direction: column;

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

const SidebarDiv = styled.div`
  width: 100%;

  @media (min-width: 450px) {
    // fixed sidebar settings
    position: fixed;
    height: 100%;
    width: 35%;
    top: 0;
    left: 0;
  }

  @media (min-width: 1400px) {
    width: 30%;
  }
`;

const Main = styled.main`
  height: 100%;

  @media (min-width: 450px) {
    // margin-left needed due to the fixed sidebar
    margin-left: 35%;
  }

  @media (min-width: 1400px) {
    margin-left: 30%;
  }
`;

const ContentDiv = styled.main`
  padding: 0 5%;
`;
