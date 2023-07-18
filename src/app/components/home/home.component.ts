import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  // paises: any;
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(
    private http: HttpClient,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    // http.get('https://restcountries.com/v3.1/lang/spanish').subscribe(
    //   (data) => {
    //     this.paises = data;
    //     console.log(this.paises);
    //   },
    //   (e) => {
    //     console.error(e);
    //   }
    // );
    spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        // console.log(data.albums.items);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (e) => {
        console.error(e);
      }
    );
  }
}
