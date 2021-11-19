import React, { Component } from "react";
import styles from "./quote-section.module.css";
export default class QuoteSection extends Component {
  render() {
    return (
      <section className={styles["quote-section-container"]}>
        <img
          alt="berserk logo"
          src={`${process.env.PUBLIC_URL}/assets/berserk-logo.png`}
        />
        <p>
          "While many can pursue their dreams in solitude, other dreams are like
          great storms blowing hundreds, even thousands of dreams apart in their
          wake. Dreams breathe life into men and can cage them in suffering. Men
          live and die by their dreams. But long after they have been abandoned
          they still smolder deep in men's hearts. Some see nothing more than
          life and death. They are dead, for they have no dreams." -Griffith
        </p>
        <img
          className={styles["background-quote-img"]}
          alt="berserk god egg"
          src={`${process.env.PUBLIC_URL}/assets/griffith.png`}
        />
        <span></span>
      </section>
    );
  }
}
