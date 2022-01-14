import { AnimeType } from "./Anime.type";
import { PageType } from "./Page.type";

export type AnimeListType = PageType & {
  media: AnimeType[];
};
