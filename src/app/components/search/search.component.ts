import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  termino: string = 'ed';

  buscar(termino: string) {
    console.log(termino);
    this.spotifyService.getArtist(termino).subscribe((data: any) => {
      console.log(data);

      this.artistas = data;
    });
  }
}
