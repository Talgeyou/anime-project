export type CharacterType = {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
    medium: string;
  };
  gender: "FEMALE" | "MALE";
  age: number | null;
};
