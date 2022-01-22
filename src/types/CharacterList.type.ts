import { CharacterType } from "./Character.type";

export type CharacterListType = {
  edges: {
    id: number;
    role: string;
    node: CharacterType;
  }[];
};
