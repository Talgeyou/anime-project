import React from "react";
import styles from "../styles/Typography.module.scss";

type Props = {
    id?: string;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "body";
    children?: string | number | (string | number)[] | React.ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
};

export const Typography = React.memo((props: Props) => {
    const { id, variant, children, className, dangerouslySetInnerHTML } = props;
    if (variant === "h1") {
        return (
            <h1
                id={id}
                className={`${className} ${styles["typography"]} ${styles["typography--h1"]}`}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            >
                {children}
            </h1>
        );
    }
    if (variant === "h2") {
        return (
            <h2
                id={id}
                className={`${className} ${styles["typography"]} ${styles["typography--h2"]}`}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            >
                {children}
            </h2>
        );
    }
    if (variant === "h3") {
        return (
            <h3
                id={id}
                className={`${className} ${styles["typography"]} ${styles["typography--h3"]}`}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            >
                {children}
            </h3>
        );
    }
    if (variant === "h4") {
        return (
            <h4
                id={id}
                className={`${className} ${styles["typography"]} ${styles["typography--h4"]}`}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            >
                {children}
            </h4>
        );
    }
    if (variant === "body") {
        return (
            <p
                id={id}
                className={`${className} ${styles["typography"]} ${styles["typography--body"]}`}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            >
                {children}
            </p>
        );
    }
    return (
        <p
            id={id}
            className={`${className} ${styles["typography"]}`}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
            {children}
        </p>
    );
});

Typography.displayName = "Typography";
