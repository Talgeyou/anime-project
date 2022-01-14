import styled from "styled-components";

export const Wrapper = styled.section`
  flex: 1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 1em;
  height: 100%;
`;

Wrapper.displayName = "HeroWrapper";

export const Left = styled.div`
  flex: 0 0 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Left.displayName = "HeroLeft";

export const Right = styled.div`
  flex: 0 0 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Right.displayName = "HeroRight";

export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

TextWrapper.displayName = "HeroTextWrapper";

export const Title = styled.h1`
  color: #efdbea;
  font-weight: 700;
  font-size: 56px;
`;

Title.displayName = "HeroTitle";

export const Description = styled.h2`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

Description.displayName = "HeroDescription";

export const ImageWrapper = styled.div``;

ImageWrapper.displayName = "HeroImageWrapper";

export const Image = styled.img``;

Image.displayName = "HeroImage";
