import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { PokeList } from '../models/poke-list.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  getPokeList(offset: Signal<number>, limit: Signal<number>): HttpResourceRef<PokeList | undefined> {
    return httpResource<PokeList>(() => {
      const offsetValue = offset();
      const limitValue = limit();
      return `${this.#pokeUrl}/pokemon?offset=${offsetValue}&limit=${limitValue}`;
    });
  }

  getPokemon(name: Signal<string>): HttpResourceRef<Pokemon | undefined> {
    return httpResource<Pokemon>(() => `${this.#pokeUrl}/pokemon/${name()}`);
  }
}
