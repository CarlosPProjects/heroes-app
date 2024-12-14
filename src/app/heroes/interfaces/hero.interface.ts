export interface Hero {
  id: number;
  name: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: String[];
  image?: string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}