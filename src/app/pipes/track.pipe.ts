import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'track',
})
export class TrackPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(track: string) {
    let data = track.split(':');
    let url: string;
    console.log(data);

    if (data[1] == 'track') {
      url = `https://open.spotify.com/embed/track/${data[2]}?utm_source=generator`;
    } else {
      url = `https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator`;
    }

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
