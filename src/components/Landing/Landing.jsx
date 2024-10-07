"use client";
import React from "react";
import styles from "./style.module.css";

import { CloudinaryVideoURL } from "../../utils/constant";

function Landing() {
  return (
    <div className={styles.container} id="landing">
      <video src={`${CloudinaryVideoURL}/d4l5ezasdlwqxbx8vsdy`} autoPlay muted loop className={styles.video} />

      <div className={styles.overlay}></div>

      <div className={styles.titleBox}>
        {/* Rotating Text Section */}
        <section className={styles.rotatingText}>
          <div className={styles.rotatingText_content}>
            <div className={styles.title}>Welcome to</div>

            {/* Rotating yoga names */}
            <h2 className={styles.rotatingText_adjective}>
              Zen <span className={styles.yoga}>Yoga</span>
            </h2>
            <h2 className={styles.rotatingText_adjective}>
              Balance <span className={styles.yoga}>Yoga</span>
            </h2>
            <h2 className={styles.rotatingText_adjective}>
              Breathe <span className={styles.yoga}>Yoga</span>
            </h2>
            <h2 className={styles.rotatingText_adjective}>
              Harmony <span className={styles.yoga}>Yoga</span>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
