import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

type Props = {
    title?: string;
    link: string;
};

export const Video = React.memo((props: Props) => {
    const { title, link } = props;
    return (
        <Plyr
            source={{ type: "video", title: title, sources: [{ src: link, provider: "youtube" }] }}
        />
    );
});

Video.displayName = "Video";
