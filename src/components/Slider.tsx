import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import styles from "../styles/Slider.module.scss";

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
        if (sliderWidth > window.innerWidth) {
            setStartPosition(event.clientX);
            setDragging(true);
        }
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (dragging) {
            setNewOffsetPosition(offsetPosition + (event.clientX - startPosition));
        }
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        event.stopPropagation();
        if (sliderWidth > window.innerWidth) {
            setStartPosition(event.touches[0].clientX);
            setDragging(true);
        }
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
                    Math.min(offsetPosition + (event.touches[0].clientX - startPosition), 0),
                    -sliderWidth + window.innerWidth - 80,
                ),
            );
        }
    };

    const handleLeftArrowClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        const isOneVisible = matchMedia("(max-width: 719px)").matches;
        const isTwoVisible = matchMedia("(max-width: 1059px)").matches;

        let count = isOneVisible ? 1 : isTwoVisible ? 2 : 3;

        const changedOffsetPosition = offsetPosition + 340 * count;

        setNewOffsetPosition(changedOffsetPosition);
        setOffsetPosition(changedOffsetPosition);
    };

    const handleRightArrowClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        const isOneVisible = matchMedia("(max-width: 719px)").matches;
        const isTwoVisible = matchMedia("(max-width: 1059px)").matches;

        let count = isOneVisible ? 1 : isTwoVisible ? 2 : 3;

        const changedOffsetPosition = offsetPosition - 340 * count;

        setNewOffsetPosition(changedOffsetPosition);
        setOffsetPosition(changedOffsetPosition);
    };

    useEffect(() => {
        setSliderStyles({
            transform: `translateX(${newOffsetPositon}px)`,
            transition: dragging ? undefined : "transform 0.3s ease-out",
        });
    }, [dragging, newOffsetPositon]);

    useEffect(() => {
        const fixedOffsetPosition = Math.min(
            Math.max(offsetPosition, -sliderWidth + window.innerWidth - 80),
            0,
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
        <div
            className={styles.slider}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <button
                tabIndex={-1}
                className={`${styles["slider-arrow"]} ${styles["slider-arrow--left"]}`}
                onClick={handleLeftArrowClick}
                style={{ display: sliderWidth < window.innerWidth ? "none" : "block" }}
            >
                <FontAwesomeIcon className={styles["slider-arrow__icon"]} icon={faAngleRight} />
            </button>
            <ul
                className={
                    dragging
                        ? `${styles["slider-items"]} ${styles["slider-items--dragging"]}`
                        : styles["slider-items"]
                }
                ref={sliderRef}
                style={sliderStyles}
            >
                {items.map((item, index) => (
                    <li className={styles["slider-items__item"]} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <button
                tabIndex={-1}
                className={`${styles["slider-arrow"]} ${styles["slider-arrow--right"]}`}
                onClick={handleRightArrowClick}
                style={{ display: sliderWidth < window.innerWidth ? "none" : "block" }}
            >
                <FontAwesomeIcon className={styles["slider-arrow__icon"]} icon={faAngleRight} />
            </button>
        </div>
    );
});

Slider.displayName = "Slider";
