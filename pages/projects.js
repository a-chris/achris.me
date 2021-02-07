import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { MY_NAME } from "../contents";
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

        <main className={styles.main}>
          <Navbar />

          {/* <div className={styles.content} style={{ padding: "0 10%" }}>
            {PROJECTS.map((p, index) => (
              <Project key={index} {...p} isOdd={index % 2} />
            ))}
          </div> */}
          <WorkInProgress />
        </main>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

function WorkInProgress() {
  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      <p>Pagina in costruzione, torna nei prossimi giorni 🤓</p>
    </div>
  );
}
