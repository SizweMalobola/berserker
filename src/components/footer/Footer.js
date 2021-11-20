import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <h3>by Sizwe Malobola</h3>
      <img
        alt="berserk logo"
        src={`${process.env.PUBLIC_URL}/assets/berserk-logo.png`}
      />
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/sizwemalobola/"
        >
          <img
            alt="linkedin icon"
            src={`${process.env.PUBLIC_URL}/assets/linkedin-brands.svg`}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/SizweMalobola"
        >
          <img
            alt="github icon"
            src={`${process.env.PUBLIC_URL}/assets/github-square-brands.svg`}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.figma.com/file/Ogrv9IKUgUYL1gIKOnSAJi/Berserk?node-id=26%3A74"
        >
          <img
            alt="figma icon"
            src={`${process.env.PUBLIC_URL}/assets/figma-brands.svg`}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
