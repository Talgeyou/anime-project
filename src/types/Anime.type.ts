export type AnimeType = {
  id: number;
  idMal: number;
  title: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  type: string;
  format: string;
  status: string;
  description: string;
  seasonYear: number;
  episodes: number;
  duration: number;
  coverImage: {
    extraLarge?: string;
    large?: string;
    medium?: string;
    color: string;
  };
  genres: string[];
  averageScore: number;
};
