import { NextPage } from "next";
import Script from "next/script";
import Page from "../components/Page";
import styles from "../styles/index.module.css";

const Index: NextPage = () => {
  const onConfettiLoad = () => {
    setTimeout(() => {
      const colors = [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ];
      var end = Date.now() + 5 * 1000;

      (function frame() {
        (window as any).confetti({
          particleCount: colors.length,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors,
        });
        (window as any).confetti({
          particleCount: colors.length,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors,
        });

        if (Date.now() < end) {
          setTimeout(() => {
            requestAnimationFrame(frame);
          }, 50);
        }
      })();
    }, 1000);
  };

  return (
    <Page title="a-recipe-idea" description="Generated by Create Next Stack.">
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"
        strategy="afterInteractive"
        onLoad={onConfettiLoad}
      />

      <main>
        <section className={styles.pageSection}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Your project is a go! 🎉</h1>
            <p className={styles.subtitle}>
              Get started by editing{" "}
              <code className={styles.inlineCode}>pages/index.tsx</code>
            </p>
          </div>
        </section>{" "}
        <section className={`${styles.pageSection} ${styles.grayBackground}`}>
          <div className={styles.contentContainer}>
            <h2 className={styles.h2}>Learning resources</h2>
            <p className={styles.paragraph}>
              If you are using a technology for the first time, you can find
              related links in the generated{" "}
              <code className={styles.inlineCode}>README.md</code> file that
              might prove helpful.
            </p>
          </div>
        </section>
      </main>
      <footer className={styles.pageSection}>
        <div className={styles.contentContainer}>
          <p className={styles.paragraph}>
            Generated by{" "}
            <a href="https://github.com/akd-io/create-next-stack">
              Create Next Stack
            </a>
          </p>
        </div>
      </footer>
    </Page>
  );
};

export default Index;
