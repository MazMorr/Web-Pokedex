import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export default class Details {
  readonly #route = inject(ActivatedRoute);

  // Obtener el parámetro como signal
  readonly name = toSignal(this.#route.params.pipe(map((params) => params['name'])), {
    initialValue: '',
  });

  readonly #pokeService = inject(PokeService);
  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
