import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { CloudinaryImageURL } from "../../utils/constant";

const AboutUs = () => {
  return (
    <div className={styles.container} data-aos="fade-up" id="about">
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src={`${CloudinaryImageURL}/behpkkh1s8gx0lqlarzi.jpg`} alt="Woman doing yoga" width={600} height={400} className={styles.image} />
        </div>
        <div className={styles.text}>
          <h2 className={styles.subtitle}>Welcome To Breathe Yoga</h2>
          <p className={styles.description}>
            At Breathe Yoga, we provide expert yoga classes in Delhi and Delhi NCR, helping individuals achieve balance in body and mind through
            mindful breathing and movement. Whether you&apos;re a beginner or experienced, our certified instructors are dedicated to guiding you on your
            yoga journey. Join us to enhance your flexibility, reduce stress, and cultivate inner peace.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
