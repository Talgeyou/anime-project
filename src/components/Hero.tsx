import React from "react";

import styles from "../styles/Hero.module.scss";
import { Typography } from "./Typography";

export const Hero = React.memo(() => {
    return (
        <section className={styles.hero}>
            <div className={styles["hero__text"]}>
                <Typography variant={"h1"}>Welcome to&nbsp;the Anime&nbsp;Site</Typography>
                <Typography variant={"body"}>
                    Here you can find information about a&nbsp;particular anime or&nbsp;discover new
                    anime to&nbsp;watch
                </Typography>
            </div>
            <div className={styles["hero__image-wrapper"]}>
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
                        className={styles["hero__image"]}
                        src={"/assets/images/hero-illustration.png"}
                        alt={"illustration"}
                    />
                </picture>
            </div>
        </section>
    );
});

Hero.displayName = "Hero";
