import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  termino: string = '';
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {
    this.buscar(this.termino);
  }

  buscar(termino: string) {
    this.loading = true;
    if (termino == '') {
      this.loading = false;
    }
    console.log(termino);
    this.spotifyService.getArtists(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
