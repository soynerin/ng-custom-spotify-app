import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/no-image.png';
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
