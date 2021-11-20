import React from "react";
import SectionHeader from "../shared/SectionHeader";
import styles from "./works-section.module.css";

function WorksSection() {
  return (
    <section className={styles["works-container"]}>
      <SectionHeader name="works" />
    </section>
  );
}

export default WorksSection;
