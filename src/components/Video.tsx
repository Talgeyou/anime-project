import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

type Props = {
    title?: string;
    link: string;
    thumbnailUrl?: string;
};

export const Video = React.memo((props: Props) => {
    const { title, link, thumbnailUrl } = props;
    return (
        <Plyr
            source={{
                type: "video",
                title: title,
                sources: [{ src: link, provider: "youtube" }],
                poster: thumbnailUrl,
            }}
        />
    );
});

Video.displayName = "Video";
