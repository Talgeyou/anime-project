import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 40px;
  display: flex;
  gap: 40px;
  overflow: hidden;
`;

Wrapper.displayName = "HeroWrapper";

export const TextWrapper = styled.div`
  min-width: 20%;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
`;

TextWrapper.displayName = "HeroTextWrapper";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;

  color: #5d5fef;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

Title.displayName = "HeroTitle";

export const Description = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: #212121;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`;

Description.displayName = "HeroDescription";

export const ImageWrapper = styled.div`
  flex: 0 0 80%;
  position: relative;
  overflow: visible;
`;

ImageWrapper.displayName = "HeroImageWrapper";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 38%;
  position: absolute;
  top: 0;
  left: 0;
`;

Image.displayName = "HeroImage";
