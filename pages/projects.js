import FadeIn from "../components/animations/FadeIn";
import PageWrapper from "../components/PageWrapper";
import Project from "../components/projects/Project";
import useTranslation from "../hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {t("PROJECTS").map((p, index) => (
        <FadeIn key={index}>
          <Project {...p} isOdd={index % 2} />
        </FadeIn>
      ))}
    </PageWrapper>
  );
}