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
        <nav className={styles["nav"]}></nav>
      </>
    );
  }
}
