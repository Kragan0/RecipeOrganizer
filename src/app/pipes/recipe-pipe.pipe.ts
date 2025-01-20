import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipePipe',
  standalone: true
})
export class RecipePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
