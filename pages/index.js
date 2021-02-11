import styled from "@emotion/styled";
import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Language from "../components/home/Language";
import SectionTitle from "../components/home/SectionTitle";
import Skill from "../components/home/Skill";
import Timeline from "../components/home/Timeline";
import Sidebar from "../components/Sidebar";
import { FRONT_DESCRIPTION, LANGUAGES, MY_NAME, SKILLS } from "../contents";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>{MY_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Sidebar />

        <ContentWrapper>
          <Section>
            <FrontDescription>{FRONT_DESCRIPTION}</FrontDescription>
          </Section>

          <Section>
            <SectionTitle text="Il mio percorso" />
            <Timeline />
          </Section>

          <Section>
            <SectionTitle text="Competenze" />
            <SkillsDiv>
              {SKILLS.map((s, index) => (
                <Skill key={index} {...s} />
              ))}
            </SkillsDiv>
          </Section>

          <Section>
            <SectionTitle text="Linguaggi di programmazione" />
            <LanguagesDiv>
              {LANGUAGES.map((lang, index) => (
                <Language key={index} language={lang} />
              ))}
            </LanguagesDiv>
          </Section>
        </ContentWrapper>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

const FrontDescription = styled.p`
  text-align: justify;

  font-size: 18px;
  line-height: 1.5;
  margin: 50px 20px;

  @media (min-width: 400px) {
    font-size: 22px;
    margin: 100px 50px;
  }
`;

const SkillsDiv = styled.div`
  margin: 0 20px;

  @media (min-width: 400px) {
    margin: 0 50px;
  }
`;

const LanguagesDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Section = styled.section`
  margin: 30px 0 60px 0;
`;
