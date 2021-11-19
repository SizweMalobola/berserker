import React from "react";
import styles from "./section-header.module.css";

function SectionHeader(props) {
  return <h1 className={styles["heading"]}>{props.name.toUpperCase()}</h1>;
}

export default SectionHeader;
