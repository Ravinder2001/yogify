"use client"; // If using Next.js 13 with app directory
import React from "react";
import dayjs from "dayjs";
import styles from "./style.module.css"; // Create a CSS module for styles

const Footer = () => {
  const currentYear = dayjs().year();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Breathe Yoga</h2>
        </div>
        <div className={styles.links}>
          {/* <a href="/about" className={styles.link}>About Us</a>
          <a href="/services" className={styles.link}>Services</a>
          <a href="/contact" className={styles.link}>Contact</a> */}
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </div>
        <div className={styles.copyRight}>
          &copy; {currentYear} Breathe Yoga. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
