import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function Teachers() {
  const teachers = [
    {
      name: "Bianca Melas",
      role: "Hatha Instructor",
      image:
        "https://plus.unsplash.com/premium_photo-1661697955364-bfc617b0f3c4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ashley Gavin",
      role: "Chakra Instructor",
      image:
        "https://plus.unsplash.com/premium_photo-1661697955364-bfc617b0f3c4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Todd Mark",
      role: "Yoga Instructor",
      image:
        "https://plus.unsplash.com/premium_photo-1661697955364-bfc617b0f3c4?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className={styles.container} id="teachers">
      <h1 className={styles.title}>Meet Our Teachers</h1>
      <div className={styles.teacherGrid}>
        {teachers.map((teacher, index) => (
          <div key={index} className={styles.teacherCard}  data-aos="fade-up">
            <Image src={teacher.image} alt={teacher.name} width={250} height={400} className={styles.teacherImage} />
            <h2 className={styles.teacherName}>{teacher.name}</h2>
            <p className={styles.teacherRole}>{teacher.role}</p>
            <p className={styles.teacherRole}>5 Years</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
