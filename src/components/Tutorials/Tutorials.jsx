import React from "react";
import styles from "./style.module.css";
import HeroVideoDialog from "../../components/magicui/hero-video-dialog";

function Tutorials() {
  const classes = [
    {
      title: "Hatha Yoga",
      imgUrl:
        "https://images.unsplash.com/photo-1617734417481-aafe074f1b86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Vinyasa Flow",
      imgUrl:
        "https://images.unsplash.com/photo-1593164842249-d74fc06dae05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Chakras",
      imgUrl:
        "https://images.unsplash.com/photo-1593164842249-d74fc06dae05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className={styles.container} id="classes">
      <div className={styles.heading}>Classes We Offer</div>
      <div className="relative flex w-[80%] mx-auto">
        {classes.map((item, index) => (
          <div className={styles.videoContainer} key={index} data-aos="fade-up">
            <HeroVideoDialog
              className="dark:hidden w-full h-full"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc={item.imgUrl}
              thumbnailAlt="Hero Video"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorials;
