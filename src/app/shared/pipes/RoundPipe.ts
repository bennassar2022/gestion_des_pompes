import {Pipe} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe {
  transform(input: number) {
    return input.toFixed(2);;
  }
}
