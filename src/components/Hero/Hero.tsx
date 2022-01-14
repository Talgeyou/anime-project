import Picture from "../../assets/images/eris-greyrat.png";

import * as S from "./Hero.styles";

interface Props {}

export const Hero = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.TextWrapper>
          <S.Title>Welcome on&nbsp;the Anime Site</S.Title>
          <S.Description>
            Mollit Lorem aute quis laborum velit nisi do&nbsp;deserunt esse
            velit aliqua anim. Nulla reprehenderit consectetur laborum sunt
            tempor ea&nbsp;laboris anim excepteur excepteur&nbsp;et.
            Id&nbsp;ipsum excepteur aliqua aliquip aute ad ex&nbsp;commodo
            commodo occaecat&nbsp;ad. Et&nbsp;velit magna sint consequat nostrud
            velit minim anim.
          </S.Description>
        </S.TextWrapper>
      </S.Left>
      <S.Right>
        <S.ImageWrapper>
          <S.Image src={Picture} alt={"illustration"} loading={"lazy"} />
        </S.ImageWrapper>
      </S.Right>
    </S.Wrapper>
  );
};
