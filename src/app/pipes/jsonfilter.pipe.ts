import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonfilter'
})
export class JsonfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
