export type pokeDataType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type pokeDetailsType = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
};
