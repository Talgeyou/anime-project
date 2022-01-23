import React, { useEffect, useRef, useState } from "react";

import * as S from "./Slider.styles";

type Props = {
  items: React.ReactNode[];
};

export const Slider = React.memo((props: Props) => {
  const { items } = props;
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [offsetPosition, setOffsetPosition] = useState(0);
  const [newOffsetPositon, setNewOffsetPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderStyles, setSliderStyles] = useState({} as React.CSSProperties);
  const sliderRef = useRef<HTMLUListElement>(null);
  const handleMouseUp = (event: React.MouseEvent) => {
    event.stopPropagation();
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

  const handleTouchStart = (event: React.TouchEvent) => {
    event.stopPropagation();
    setStartPosition(event.touches[0].clientX);
    setDragging(true);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    event.stopPropagation();
    setDragging(false);
    setOffsetPosition(newOffsetPositon);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (dragging) {
      event.stopPropagation();
      setNewOffsetPosition(
        Math.max(
          Math.min(
            offsetPosition + (event.touches[0].clientX - startPosition),
            0
          ),
          -sliderWidth + window.innerWidth - 80
        )
      );
    }
  };

  useEffect(() => {
    setSliderStyles({ transform: `translateX(${newOffsetPositon}px)` });
  }, [newOffsetPositon]);

  useEffect(() => {
    const fixedOffsetPosition = Math.min(
      Math.max(offsetPosition, -sliderWidth + window.innerWidth - 80),
      0
    );

    setNewOffsetPosition(fixedOffsetPosition);
    setOffsetPosition(fixedOffsetPosition);
  }, [offsetPosition, sliderWidth]);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, [sliderRef]);

  return (
    <S.Wrapper
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <S.Carousel
        className={dragging ? "dragging" : undefined}
        ref={sliderRef}
        style={sliderStyles}
      >
        {items.map((item, index) => (
          <S.Item key={index}>{item}</S.Item>
        ))}
      </S.Carousel>
    </S.Wrapper>
  );
});

Slider.displayName = "Slider";
