import { PokeResult } from './../../core/models/poke-result.model';
import { Component, input } from '@angular/core';
import { PokeImgPipe } from './poke-img-pipe';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [PokeImgPipe, NgOptimizedImage, RouterLink, UpperCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  readonly pokeResult = input.required<PokeResult>();
}
