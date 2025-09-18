import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeImg'
})
export class PokeImgPipe implements PipeTransform {

  transform(url: string): string {
    const parts = url.split('/');
    const id = parts[parts.length - 2]
    return id ? `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${id}.png`:
    'htpps://placehold.co/120x120/E0E0E0/333333?text=Image=Error';
  }

}
