import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <img
        alt="berserk hero section text"
        src={`${process.env.PUBLIC_URL}/assets/berserk.png`}
      />
      <p>
        Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese manga
        series written and illustrated by Kentaro Miura. Miura premiered a
        prototype of Berserk in 1988. The series began the following year in the
        Hakusensha's now-defunct magazine Monthly Animal House, which was
        replaced in 1992 by the semimonthly magazine Young Animal, where Berserk
        has continued its publication intermittently. Miura died of aortic
        dissection in May 2021. A posthumous chapter was published in the
        magazine in September 2021.
      </p>
      <img
        className={styles["background-hero-img"]}
        alt="berserk hero section background"
        src={`${process.env.PUBLIC_URL}/assets/hero-background.png`}
      />
      <span></span>
    </div>
  );
}

export default Hero;
