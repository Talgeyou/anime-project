import { AnimeType } from "./Anime.type";
import { EdgeType } from "./Edge.type";

export type AnimeEdgeType = EdgeType & {
    relationType: string;
    node: AnimeType;
};
