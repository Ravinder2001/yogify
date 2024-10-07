import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { CloudinaryImageURL } from "../../utils/Constant";

function Teachers() {
  const teachers = [
    {
      name: "Taruna Sharma",
      role: "Master's in Yoga",
      exp: "5 years of experience",
      info: "",
      image: `${CloudinaryImageURL}/gsylrlcfrl4tlhttb3wc.jpg`,
    },
    {
      name: "Chanchal",
      role: "Advanced Yoga",
      exp: "6+ years of experience",
      info: "5-time National Gold Medalist",
      image: `${CloudinaryImageURL}/asel6d9ubornsfux1dal.jpg`,
    },
    {
      name: "Shalu Yadav",
      role: "Master's in Yoga",
      exp: "5 years of experience",
      info: "Expert in Meditation classes",
      image: `${CloudinaryImageURL}/m1qvna55syvlzqmdwikt.jpg`,
    },
  ];

  return (
    <div className={styles.container} id="teachers">
      <h1 className={styles.title}>Meet Our Teachers</h1>
      <div className={styles.teacherGrid}>
        {teachers.map((teacher, index) => (
          <div key={index} className={styles.teacherCard} data-aos="fade-up">
            <Image src={teacher.image} alt={teacher.name} width={250} height={400} className={styles.teacherImage} />
            <h2 className={styles.teacherName}>{teacher.name}</h2>
            <p className={styles.teacherRole}>{teacher.role}</p>
            <p className={styles.teacherRole}>{teacher.exp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
