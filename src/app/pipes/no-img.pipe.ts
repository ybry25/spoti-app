import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg',
})
export class NoImgPipe implements PipeTransform {
  transform(value: any[]): string {
    if (!value) {
      return '../assets/noimage.png';
    }
    if (value.length > 0) {
      return value[0].url;
    } else {
      return '../assets/noimage.png';
    }
  }
}
