import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}  data-aos="fade-up" id='about'>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/2410573/pexels-photo-2410573.jpeg" 
            alt="Woman doing yoga" 
            width={600} 
            height={400} 
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.subtitle}>Welcome To Yogify</h2>
          <p className={styles.description}>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. 
            Quas Est Pariatur Eius Sit Odio, Voluptatum Delectus Ratione. 
            Exercitationem, Eum Sit! Lorem Ipsum Dolor, Sit Amet 
            Consectetur Adipisicing Elit. Iure Illo Enim Ad Cupiditate 
            Accusantium Consequuntur Cumque Provident Nulla,
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;