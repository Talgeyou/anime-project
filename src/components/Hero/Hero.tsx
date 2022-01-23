import PicturePNG from "../../assets/images/hero-illustration.png";
import PictureWEBP from "../../assets/images/hero-illustration.webp";
import PicturePNG1024 from "../../assets/images/hero-illustration-1024w.png";
import PictureWEBP1024 from "../../assets/images/hero-illustration-1024w.webp";
import PicturePNG768 from "../../assets/images/hero-illustration-768w.png";
import PictureWEBP768 from "../../assets/images/hero-illustration-768w.webp";

import * as S from "./Hero.styles";
import React from "react";

export const Hero = React.memo(() => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>Welcome to&nbsp;the Anime&nbsp;Site</S.Title>
        <S.Description>
          Here you can find information about a&nbsp;particular anime
          or&nbsp;discover new anime to&nbsp;watch
        </S.Description>
      </S.TextWrapper>
      <S.ImageWrapper>
        <picture>
          <source srcSet={PictureWEBP768} media={"(max-width: 768px)"} />
          <source srcSet={PicturePNG768} media={"(max-width: 768px)"} />
          <source srcSet={PictureWEBP1024} media={"(max-width: 1024px)"} />
          <source srcSet={PicturePNG1024} media={"(max-width: 1024px)"} />
          <source srcSet={PictureWEBP} />
          <source srcSet={PicturePNG} />

          <S.Image src={PicturePNG} alt={"illustration"} />
        </picture>
      </S.ImageWrapper>
    </S.Wrapper>
  );
});

Hero.displayName = "Hero";
