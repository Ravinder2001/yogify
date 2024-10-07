"use client";
import React from "react";
import styles from "./style.module.css";
import { Link } from "react-scroll";
import whatsIcon from "../../assets/images/whatsapp.png";
import emailIcon from "../../assets/images/email.png";
import Image from "next/image";
import ENVConfig from "../../utils/config";

function Navbar() {
  const handleWhatsapp = () => {
    window.open(`https://wa.me/${ENVConfig.mobile}`, "_blank");
  };
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
      <div className={styles.right}>
        <Image src={whatsIcon} alt="" className={styles.img} onClick={handleWhatsapp} />
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={1000}>
          <Image src={emailIcon} alt="" className={styles.img} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
