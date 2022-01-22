import { AnimeType } from "./Anime.type";
import { CharacterType } from "./Character.type";
import { CharacterListType } from "./CharacterList.type";

export type AnimeDetailsType = {
  id: number;
  idMal: number;
  bannerImage: string;
  title: {
    romaji: string;
    native: string;
    english: string;
  };
  type: string;
  format: string;
  status: string;
  description: string;
  source: string;
  season: string;
  seasonYear: number;
  episodes: number;
  duration: number;
  countryOfOrigin: string;
  genres: string[];
  synonyms: string[];
  averageScore: number;
  characters: CharacterListType;
  relations: {
    edges: {
      id: number;
      relationType: string;
      node: AnimeType;
    }[];
  };
  isAdult: boolean;
};
