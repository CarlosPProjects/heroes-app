export interface Hero {
  id: number;
  name: string;
  publisher: Publisher;
  alterEgo: string;
  firstAppearance: string;
  characters: String[];
  image?: string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}