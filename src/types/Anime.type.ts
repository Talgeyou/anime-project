export type AnimeType = {
  id: number;
  idMal: number;
  title: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  type: string;
  coverImage: {
    extraLarge?: string;
    large?: string;
    medium?: string;
    color: string;
  };
  isAdult: boolean;
  relationType?: string;
};
