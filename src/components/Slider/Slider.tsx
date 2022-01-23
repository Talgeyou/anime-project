import { Styles } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";

import * as S from "./Slider.styles";

type Props = {
  items: React.ReactNode[];
};

export const Slider = (props: Props) => {
  const { items } = props;
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [offsetPosition, setOffsetPosition] = useState(0);
  const [newOffsetPositon, setNewOffsetPosition] = useState(0);
  const [sliderStyles, setSliderStyles] = useState({} as React.CSSProperties);
  const handleMouseUp = (event: React.MouseEvent) => {
    setDragging(false);
    setOffsetPosition(newOffsetPositon);
  };
  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setStartPosition(event.clientX);
    setDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (dragging) {
      setNewOffsetPosition(offsetPosition + (event.clientX - startPosition));
    }
  };

  useEffect(() => {
    console.log(
      "🚀 ~ file: Slider.tsx ~ line 14 ~ Slider ~ newOffsetPositon",
      newOffsetPositon
    );
    setSliderStyles({ transform: `translateX(${newOffsetPositon}px)` });
  }, [newOffsetPositon]);

  return (
    <S.Wrapper
      className={dragging ? "dragging" : undefined}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <S.Carousel style={sliderStyles}>
        {items.map((item) => (
          <S.Item>{item}</S.Item>
        ))}
      </S.Carousel>
    </S.Wrapper>
  );
};
