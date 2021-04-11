import styled from "@emotion/styled";
import FadeIn from "../components/animations/FadeIn";
import Language from "../components/home/Language";
import SectionTitle from "../components/home/SectionTitle";
import Skill from "../components/home/Skill";
import Timeline from "../components/home/Timeline";
import PageWrapper from "../components/PageWrapper";
import useTranslation from "../hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <FadeIn>
        <Section>
          <FrontDescription>{t("FRONT_DESCRIPTION")}</FrontDescription>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <SectionTitle text={t("TITLE_STORY")} />
          <Timeline />
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <SectionTitle text={t("TITLE_SKILLS")} />
          <SkillsDiv>
            {t("SKILLS").map((s, index) => (
              <Skill key={index} {...s} />
            ))}
          </SkillsDiv>
        </Section>
      </FadeIn>

      <FadeIn>
        <Section>
          <SectionTitle text={t("TITLE_LANGUAGES")} />
          <LanguagesDiv>
            {t("LANGUAGES").map((lang, index) => (
              <Language key={index} language={lang} />
            ))}
          </LanguagesDiv>
        </Section>
      </FadeIn>
    </PageWrapper>
  );
}

const FrontDescription = styled.p`
  text-align: justify;

  font-size: 18px;
  line-height: 1.7;
  margin: 50px 20px;

  @media (min-width: 450px) {
    font-size: 22px;
    margin: 100px 50px;
  }

  @media (min-width: 1400px) {
    line-height: 2;
    margin: 100px 100px;
  }
`;

const SkillsDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const LanguagesDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Section = styled.section`
  margin: 30px 0 60px 0;
`;
