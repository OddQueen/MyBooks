import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigo'
})
export class CodigoPipe implements PipeTransform {
  transform(id_book: number): string {
    return `Ref-${id_book.toString().padStart(6, '0')}`;

  }
}
