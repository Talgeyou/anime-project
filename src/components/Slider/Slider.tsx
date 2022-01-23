import { Styles } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useRef, useState } from "react";

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
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderStyles, setSliderStyles] = useState({} as React.CSSProperties);
  const sliderRef = useRef<HTMLUListElement>(null);
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
      setNewOffsetPosition(
        Math.max(
          Math.min(offsetPosition + (event.clientX - startPosition), 0),
          -sliderWidth + window.innerWidth - 80
        )
      );
    }
  };

  useEffect(() => {
    console.log(
      "🚀 ~ file: Slider.tsx ~ line 14 ~ Slider ~ newOffsetPositon",
      newOffsetPositon
    );
    setSliderStyles({ transform: `translateX(${newOffsetPositon}px)` });
  }, [newOffsetPositon]);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
      console.log(
        "🚀 ~ file: Slider.tsx ~ line 51 ~ useEffect ~ sliderRef.current.offsetWidth",
        sliderRef.current.offsetWidth
      );
    }
  }, [sliderRef]);

  return (
    <S.Wrapper
      className={dragging ? "dragging" : undefined}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <S.Carousel ref={sliderRef} style={sliderStyles}>
        {items.map((item) => (
          <S.Item>{item}</S.Item>
        ))}
      </S.Carousel>
    </S.Wrapper>
  );
};
