import React from "react";

import styles from "../../styles/Hero.module.scss";

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
          <source
            srcSet={"/assets/images/hero-illustration-320w.webp"}
            media={"(max-width: 320px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-320w.png"}
            media={"(max-width: 320px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-375w.webp"}
            media={"(max-width: 375px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-375w.png"}
            media={"(max-width: 375px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-425w.webp"}
            media={"(max-width: 425px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-425w.png"}
            media={"(max-width: 425px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-768w.webp"}
            media={"(max-width: 768px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-768w.png"}
            media={"(max-width: 768px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-1024w.webp"}
            media={"(max-width: 1024px)"}
          />
          <source
            srcSet={"/assets/images/hero-illustration-1024w.png"}
            media={"(max-width: 1024px)"}
          />
          <source srcSet={"/assets/images/hero-illustration.webp"} />
          <source srcSet={"/assets/images/hero-illustration.png"} />

          <img
            className={styles["hero-image__picture"]}
            src={"/assets/images/hero-illustration.png"}
            alt={"illustration"}
          />
        </picture>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
