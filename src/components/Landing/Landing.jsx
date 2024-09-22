import React from "react";
import styles from "./style.module.css";
import YogaCoverImage from "../../assets/images/yoga-cover.jpg";
import Image from "next/image";

function Landing() {
  return (
    <div className={styles.container} id="landing">
      <Image src={YogaCoverImage} alt="yoga-cover-image" className={styles.image} />
      <div className={styles.overlay}></div>
      <div className={styles.titleBox}>
        <div className={styles.title}>Welcome to Yogify</div>
        <div className={styles.subTitle}>
          Experience the transformative power of yoga. Whether you&apos;re new or seasoned, our classes help you find balance, strength, and peace.
          Start your journey to a healthier, more mindful you today.
        </div>
      </div>
    </div>
  );
}

export default Landing;
