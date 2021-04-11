import styled from "@emotion/styled";
import FadeIn from "../components/animations/FadeIn";
import Divider from "../components/Divider";
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
          <ProjectDivider variant="middle"  />
        </FadeIn>
      ))}
    </PageWrapper>
  );
}

const ProjectDivider = styled(Divider)`
  height: 1px;
  background-color: darkgray;
  box-shadow: 0px 0 8px darkgrey;
`;
