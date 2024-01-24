import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fgpassword'
})
export class FgpasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
