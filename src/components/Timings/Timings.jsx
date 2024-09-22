import React from "react";
import styles from "./style.module.css";
function Timings() {
  return (
    <section className={styles.yogaTimings} id="timings">
      <h2 className={styles.title}>Yoga Timings</h2>
      <div className={styles.timingGrid} data-aos="fade-up">
        <div className={styles.timingCard}>
          <h3 className={styles.className}>Morning Yoga</h3>
          <p className={styles.time}>6:00 AM - 7:00 AM</p>
          <p className={styles.details}>Awaken your body and mind with a refreshing morning session.</p>
        </div>
        <div className={styles.timingCard} data-aos="fade-up">
          <h3 className={styles.className}>Afternoon Yoga</h3>
          <p className={styles.time}>12:00 PM - 1:00 PM</p>
          <p className={styles.details}>Rejuvenate your energy with an invigorating midday class.</p>
        </div>
        <div className={styles.timingCard} data-aos="fade-up">
          <h3 className={styles.className}>Evening Yoga</h3>
          <p className={styles.time}>6:00 PM - 7:00 PM</p>
          <p className={styles.details}>Unwind and relax after a long day with our evening session.</p>
        </div>
      </div>
    </section>
  );
}

export default Timings;
