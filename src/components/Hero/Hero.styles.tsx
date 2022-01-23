import React from "react";
import styled from "styled-components";

export const Wrapper = React.memo(styled.section`
  padding: 0 40px;
  display: flex;
  gap: 40px;
  overflow: hidden;
  color: ${(props) => props.theme.colors.text.main};
  background-color: ${(props) => props.theme.colors.background};
`);

Wrapper.displayName = "HeroWrapper";

export const TextWrapper = React.memo(styled.div`
  min-width: 20%;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
`);

TextWrapper.displayName = "HeroTextWrapper";

export const Title = React.memo(styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.colors.text.accent};

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`);

Title.displayName = "HeroTitle";

export const Description = React.memo(styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: inherit;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`);

Description.displayName = "HeroDescription";

export const ImageWrapper = React.memo(styled.div`
  flex: 0 0 80%;
  position: relative;
  overflow: visible;
`);

ImageWrapper.displayName = "HeroImageWrapper";

export const Image = React.memo(styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 38%;
  position: absolute;
  top: 0;
  left: 0;
`);

Image.displayName = "HeroImage";
