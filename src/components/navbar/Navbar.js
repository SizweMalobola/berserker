import React, { Component } from "react";
import styles from "./navbar.module.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    // burger button toggle state
    this.state = {};
  }

  render() {
    return (
      <>
        <nav className={styles["nav"]}>
          <div>
            <img
              alt="berserk logo"
              src={`${process.env.PUBLIC_URL}/assets/berserk-logo.png`}
            />
            <div className={styles["menuToggle"]}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
