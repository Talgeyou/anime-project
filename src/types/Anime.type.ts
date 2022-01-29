export type AnimeType = {
    id: number;
    idMal: number;
    title: {
        romaji?: string;
        english?: string;
        native?: string;
    };
    description: string;
    averageScore: number;
    status: string;
    episodes: string;
    duration: string;
    type: string;
    format: string;
    coverImage: {
        extraLarge?: string;
        large?: string;
        medium?: string;
        color: string;
    };
    isAdult: boolean;
    relationType?: string;
};
