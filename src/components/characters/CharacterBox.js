import React from "react";
import styles from "./character-box.module.css";

function CharacterBox(props) {
  return (
    <>
      <div className={styles["character-box-container"]}>
        <img
          className={styles["character-img"]}
          alt={`${props.name} character box`}
          src={`${process.env.PUBLIC_URL}/assets/${props.imgName}`}
        />
        <h3>{props.name.toUpperCase()}</h3>
      </div>
    </>
  );
}

export default CharacterBox;
