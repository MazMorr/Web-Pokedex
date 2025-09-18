import { PokeResult } from './poke-result.model';

export interface PokeList {
  count: number;
  next: string;
  previous: string;
  results: PokeResult[];
}
