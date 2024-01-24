import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forgetpassword'
})
export class ForgetpasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
