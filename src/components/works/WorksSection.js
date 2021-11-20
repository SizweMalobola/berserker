import React from "react";
import SectionHeader from "../shared/SectionHeader";
import styles from "./works-section.module.css";

function WorksSection() {
  return (
    <section className={styles["works-container"]}>
      <SectionHeader name="works" />
      <img
        className={styles["works-img"]}
        alt="berserk works 1"
        src={`${process.env.PUBLIC_URL}/assets/works1.jpeg`}
      />
      <img
        className={styles["works-img"]}
        alt="berserk works 2"
        src={`${process.env.PUBLIC_URL}/assets/works2.jpeg`}
      />
      <img
        className={styles["works-img"]}
        alt="berserk works 3"
        src={`${process.env.PUBLIC_URL}/assets/works3.jpeg`}
      />
    </section>
  );
}

export default WorksSection;
