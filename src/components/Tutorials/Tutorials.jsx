"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { CloudinaryImageURL } from "../../utils/constant";
import styles from "./style.module.css"

function Tutorials() {
  let images = [
    "behpkkh1s8gx0lqlarzi",
    "jkfepoq66ofwny4yrwyc",
    "j0lmvqcnvdpg1hwrkjbp",
    "db917uoizd1hhnqmdd1c",
    "rsdpdu0l1sxzthdfumkn",
    "gtu1g3p1lp4j65ks0hxs",
    "v3go9htmes94wbkfqyos",
    "hbua6dakwm7plh6ngznk",
    "zngesufu8aqj3cs8fy3a",
    "ibuteogiwfpimetqmsdh",
    "iqq0ofw0iknxy2lnlzts",
    "dtfm4rd6euvwd7kj8wlf",
    "qpcjkxvmveqkhpcla9md",
    "dhhybfzvo65bqcl46xvl",
    "asel6d9ubornsfux1dal",
    "pgdr2dde5jpluiooamgd",
    "n61kn36woxjuxiilhpxj",
  ];
  return (
    <div id="classes" className={styles.container}>
      <div className={styles.title}>Our Yoga Journey</div>
      <Marquee direction="left" style={{ marginTop: "0px" }}>
        {images.map((image, index) => (
          <Image className={styles.image} key={index} src={`${CloudinaryImageURL}/${image}.jpg`} alt="" width={200} height={200} />
        ))}
      </Marquee>
    </div>
  );
}

export default Tutorials;
