import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';

@Component({
  selector: 'app-list',
  imports: [Card],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();
}
