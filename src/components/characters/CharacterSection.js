import React from "react";
import SectionHeader from "../shared/SectionHeader";
import styles from "./characters-section.module.css";

function CharacterSection() {
  return (
    <section className={styles["characters-container"]}>
      <SectionHeader name={"characters"} />
    </section>
  );
}

export default CharacterSection;
