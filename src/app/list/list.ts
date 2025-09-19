import { Component, computed, effect, inject, signal } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [Card],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  readonly #pokeService = inject(PokeService);
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);

  currentPage = signal(0);
  itemsPerPage = signal(20);
  totalPokemon = signal(1302);

  // ✅ CORRECTO: Señales computadas para reactividad
  offset = computed(() => this.currentPage() * this.itemsPerPage());
  limit = computed(() => this.itemsPerPage());

  // ✅ CORRECTO: Resource con señales reactivas
  protected readonly pokeListResource = this.#pokeService.getPokeList(
    this.offset,
    this.limit
  );

  constructor() {
    // ✅ CORRECTO: Usando observable para reactividad
    effect((onCleanup) => {
      const sub = this.#activatedRoute.queryParams.subscribe(params => {
        const page = parseInt(params['page']) || 0;
        this.currentPage.set(page);
      });
      
      onCleanup(() => sub.unsubscribe());
    });
  }

  // Navegar a página siguiente
  nextPage() {
    const newPage = this.currentPage() + 1;
    this.#router.navigate([], {
      relativeTo: this.#activatedRoute,
      queryParams: { page: newPage },
      queryParamsHandling: 'merge',
    });
  }

  // Navegar a página anterior
  prevPage() {
    const newPage = Math.max(0, this.currentPage() - 1);
    this.#router.navigate([], {
      relativeTo: this.#activatedRoute,
      queryParams: { page: newPage },
      queryParamsHandling: 'merge',
    });
  }

  // Total de páginas
  totalPages = computed(() => Math.ceil(this.totalPokemon() / this.itemsPerPage()));
}