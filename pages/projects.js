import FadeIn from "../components/animations/FadeIn";
import PageWrapper from "../components/PageWrapper";
import Project from "../components/projects/Project";
import { PROJECTS } from "../contents";

export default function Home() {
  return (
    <PageWrapper>
      {PROJECTS.map((p, index) => (
        <FadeIn key={index}>
          <Project {...p} isOdd={index % 2} />
        </FadeIn>
      ))}
      {/* <WorkInProgress /> */}
    </PageWrapper>
  );
}

function WorkInProgress() {
  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      <p>Pagina in costruzione, torna nei prossimi giorni 🤓</p>
    </div>
  );
}
