import React from "react";
import SectionHeader from "../shared/SectionHeader";
import CharacterBox from "./CharacterBox";
import styles from "./characters-section.module.css";

function CharacterSection() {
  return (
    <section className={styles["characters-container"]}>
      <SectionHeader name={"characters"} />
      <CharacterBox name="guts" imgName="character_guts.png" />
      <CharacterBox name="griffith" imgName="character_griffith.png" />
      <CharacterBox name="casca" imgName="character_casca.png" />
    </section>
  );
}

export default CharacterSection;
