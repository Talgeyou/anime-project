import { AnimeType } from "./Anime.type";
import { CharacterListType } from "./CharacterList.type";

export type AnimeDetailsType = AnimeType & {
  bannerImage: string;
  description: string;
  source: string;
  season: string;
  seasonYear: number;
  countryOfOrigin: string;
  genres: string[];
  synonyms: string[];
  characters: CharacterListType;
  relations: {
    edges: {
      id: number;
      relationType: string;
      node: AnimeType;
    }[];
  };
};
