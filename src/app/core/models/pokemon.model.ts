export interface Pokemon {
  id: number;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  base_experience: number;
  height: number;
  weight: number;
}
