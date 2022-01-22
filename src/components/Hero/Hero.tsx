import PicturePNG from "../../assets/images/hero-illustration.png";
import PictureWEBP from "../../assets/images/hero-illustration.webp";
import PicturePNG1024 from "../../assets/images/hero-illustration-1024w.png";
import PictureWEBP1024 from "../../assets/images/hero-illustration-1024w.webp";
import PicturePNG768 from "../../assets/images/hero-illustration-768w.png";
import PictureWEBP768 from "../../assets/images/hero-illustration-768w.webp";

import * as S from "./Hero.styles";

interface Props {}

export const Hero = (props: Props) => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>Welcome on&nbsp;the Anime&nbsp;Site</S.Title>
        <S.Description>
          Mollit Lorem aute quis laborum velit nisi do&nbsp;deserunt esse velit
          aliqua anim. Nulla reprehenderit consectetur laborum sunt tempor
          ea&nbsp;laboris anim excepteur excepteur&nbsp;et. Id&nbsp;ipsum
          excepteur aliqua aliquip aute ad ex&nbsp;commodo commodo
          occaecat&nbsp;ad. Et&nbsp;velit magna sint consequat nostrud velit
          minim anim.
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

          <S.Image src={PicturePNG} alt={"illustration"} loading={"lazy"} />
        </picture>
      </S.ImageWrapper>
    </S.Wrapper>
  );
};
