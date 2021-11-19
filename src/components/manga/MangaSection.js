import React from "react";
import SectionHeader from "../shared/SectionHeader";
import styles from "./manga-section.module.css";

function MangaSection() {
  return (
    <section className={styles["manga-section-container"]}>
      <SectionHeader name={"manga"} />
      <span></span>
      <div className={styles["dropdown"]}>
        <div>
          <h3>Description</h3>
          <button
            onClick={(e) => {
              //   if block display is "block" toggle to "none", else do the opposite.
              let targetElement =
                e.currentTarget.parentElement.parentElement.querySelector("p");
              if (targetElement.style.display === "block") {
                targetElement.style.display = "none";
              } else {
                targetElement.style.display = "block";
              }
            }}
          >
            +
          </button>
        </div>
        <p>
          Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a Japanese
          manga series written and illustrated by Kentaro Miura. Set in a
          medieval Europe-inspired dark fantasy world, the story centers on the
          characters of Guts, a lone mercenary, and Griffith, the leader of a
          mercenary band called the "Band of the Hawk". Miura premiered a
          prototype of Berserk in 1988. The series began the following year in
          the Hakusensha's now-defunct magazine Monthly Animal House, which was
          replaced in 1992 by the semimonthly magazine Young Animal, where
          Berserk has continued its publication intermittently. Miura died of
          aortic dissection in May 2021. A posthumous chapter was published in
          the magazine in September 2021.
        </p>
      </div>
      <span></span>
      {/*  */}
      <div className={styles["dropdown"]}>
        <div>
          <h3>Plot</h3>
          <button
            onClick={(e) => {
              //   if block display is "block" toggle to "none", else do the opposite.
              let targetElement =
                e.currentTarget.parentElement.parentElement.querySelector("p");
              if (targetElement.style.display === "block") {
                targetElement.style.display = "none";
              } else {
                targetElement.style.display = "block";
              }
            }}
          >
            +
          </button>
        </div>
        <p>
          His name is Guts, the Black Swordsman, a feared warrior spoken of only
          in whispers. Bearer of a gigantic sword, an iron hand, and the scars
          of countless battles and tortures, his flesh is also indelibly marked
          with The Brand, an unholy symbol that draws the forces of darkness to
          him and dooms him as their sacrifice. But Guts won't take his fate
          lying down; he'll cut a crimson swath of carnage through the ranks of
          the damned - and anyone else foolish enough to oppose him! Accompanied
          by Puck the Elf, more an annoyance than a companion, Guts relentlessly
          follows a dark, bloodstained path that leads only to death...or
          vengeance.
        </p>
      </div>
      <span></span>
      <div className={styles["dropdown"]}>
        <div>
          <h3>Author</h3>
          <button
            onClick={(e) => {
              //   if block display is "block" toggle to "none", else do the opposite.
              let targetElement =
                e.currentTarget.parentElement.parentElement.querySelector(
                  `.${styles["author-container"]}`
                );
              if (targetElement.style.display === "block") {
                targetElement.style.display = "none";
              } else {
                targetElement.style.display = "block";
              }
            }}
          >
            +
          </button>
        </div>
        <div className={styles["author-container"]}>
          <img
            className={styles["author-img"]}
            alt="Kentaro Miura author of berserk"
            src={`${process.env.PUBLIC_URL}/assets/Kentaro_Miura.png`}
          />
          <p>
            Kentaro Miura (三浦 建太郎, Miura Kentarō, July 11, 1966 – May 6,
            2021) was a Japanese manga artist. He was best known for his
            acclaimed dark fantasy series Berserk, which began serialization in
            1989 and continued until his death. As of 2021, Berserk had more
            than 50 million copies in circulation, making it one of the
            best-selling manga series of all time. In 2002, Miura received the
            Award for Excellence at the 6th Tezuka Osamu Cultural Prizes.
          </p>
        </div>
      </div>
      <span></span>
      <div className={styles["dropdown"]}>
        <div>
          <h3>Manga Volumes</h3>
          <button
            onClick={(e) => {
              //   if block display is "block" toggle to "none", else do the opposite.
              let targetElement =
                e.currentTarget.parentElement.parentElement.querySelector("p");
              if (targetElement.style.display === "block") {
                targetElement.style.display = "none";
              } else {
                targetElement.style.display = "block";
              }
            }}
          >
            +
          </button>
        </div>
        <p>
          Berserk is current on
          <a
            rel="noreferrer"
            target="_blank"
            href="https://berserk.fandom.com/wiki/Releases_(Manga)#Volumes"
          >
            volume 40
          </a>
        </p>
      </div>
    </section>
  );
}

export default MangaSection;
