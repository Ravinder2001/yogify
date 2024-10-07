import React from "react";
import styles from "./style.module.css";
import axios from "axios";
import ENVConfig from "../../utils/config";

// Fetch timings data from the API
async function fetchTimings() {
  try {
    const res = await axios.get(`/api/timing`); // Make sure to set the base URL
    if (res?.status === 200) {
      return res.data?.data; // Return the fetched timings
    }
  } catch (error) {
    console.error("Error fetching timings:", error);
    return null; // Return null in case of an error
  }
}

const Timings = async () => {
  const timings = await fetchTimings(); // Fetch timings on the server

  // Check if timings data is loaded
  if (!timings) {
    return <p>Error loading yoga timings.</p>;
  }

  return (
    <section className={styles.yogaTimings} id="timings">
      <h2 className={styles.title}>Yoga Timings</h2>
      <div className={styles.timingGrid} data-aos="fade-up">
        <div className={styles.timingCard}>
          <h3 className={styles.className}>Morning Yoga</h3>
          <p className={styles.time}>
            {timings.morning_from_time} - {timings.morning_to_time}
          </p>
          <p className={styles.details}>Awaken your body and mind with a refreshing morning session.</p>
        </div>
        <div className={styles.timingCard} data-aos="fade-up">
          <h3 className={styles.className}>Afternoon Yoga</h3>
          <p className={styles.time}>
            {timings.afternoon_from_time} - {timings.afternoon_to_time}
          </p>
          <p className={styles.details}>Rejuvenate your energy with an invigorating midday class.</p>
        </div>
        <div className={styles.timingCard} data-aos="fade-up">
          <h3 className={styles.className}>Evening Yoga</h3>
          <p className={styles.time}>
            {timings.evening_from_time} - {timings.evening_to_time}
          </p>
          <p className={styles.details}>Unwind and relax after a long day with our evening session.</p>
        </div>
      </div>
    </section>
  );
};

export default Timings;
