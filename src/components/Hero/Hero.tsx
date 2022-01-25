import React from "react";

import PicturePNG from "../../assets/images/hero-illustration.png";
import PictureWEBP from "../../assets/images/hero-illustration.webp";
import PicturePNG1024 from "../../assets/images/hero-illustration-1024w.png";
import PictureWEBP1024 from "../../assets/images/hero-illustration-1024w.webp";
import PicturePNG768 from "../../assets/images/hero-illustration-768w.png";
import PictureWEBP768 from "../../assets/images/hero-illustration-768w.webp";

import styles from "./Hero.module.scss";

export const Hero = React.memo(() => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <h1 className={styles["hero-text__title"]}>
          Welcome to&nbsp;the Anime&nbsp;Site
        </h1>
        <p className={styles["hero-text__description"]}>
          Here you can find information about a&nbsp;particular anime
          or&nbsp;discover new anime to&nbsp;watch
        </p>
      </div>
      <div className={styles["hero-image"]}>
        <picture>
          <source srcSet={PictureWEBP768} media={"(max-width: 768px)"} />
          <source srcSet={PicturePNG768} media={"(max-width: 768px)"} />
          <source srcSet={PictureWEBP1024} media={"(max-width: 1024px)"} />
          <source srcSet={PicturePNG1024} media={"(max-width: 1024px)"} />
          <source srcSet={PictureWEBP} />
          <source srcSet={PicturePNG} />

          <img
            className={styles["hero-image__picture"]}
            src={PicturePNG}
            alt={"illustration"}
          />
        </picture>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
