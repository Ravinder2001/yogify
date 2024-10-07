"use client";
import React from "react";
import styles from "./style.module.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>Breathe Yoga</div>
      <div className={styles.middle}>
        <Link activeClass="active" to="landing" spy={true} smooth={true} offset={-100} duration={1000}>
          <div className={`${styles.label} ${styles.active}`}>Home</div>
        </Link>
        <Link activeClass="active" to="classes" spy={true} smooth={true} offset={-100} duration={1000}>
          <div className={styles.label}>Classes</div>
        </Link>
        <Link activeClass="active" to="timings" spy={true} smooth={true} offset={-100} duration={1000}>
          <div className={styles.label}>Timings</div>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={1000}>
          <div className={styles.label}>About</div>
        </Link>
        <Link activeClass="active" to="teachers" spy={true} smooth={true} offset={-100} duration={1000}>
          <div className={styles.label}>Teachers</div>
        </Link>
      </div>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={1000}>
        <div className={styles.right}>Inquiry</div>
      </Link>
    </div>
  );
}

export default Navbar;
