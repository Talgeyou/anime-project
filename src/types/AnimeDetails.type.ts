import { AnimeType } from "./Anime.type";
import { AnimeRelationsType } from "./AnimeRelations.type";
import { AnimeTrailerType } from "./AnimeTrailer.type";
import { CharacterListType } from "./CharacterList.type";

export type AnimeDetailsType = AnimeType & {
    trailer: AnimeTrailerType;
    bannerImage: string;
    description: string;
    source: string;
    season: string;
    seasonYear: number;
    countryOfOrigin: string;
    genres: string[];
    synonyms: string[];
    characters: CharacterListType;
    relations: AnimeRelationsType;
};
