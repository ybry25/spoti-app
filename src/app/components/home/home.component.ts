import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  paises: any;
  constructor(private http: HttpClient, private _spotify: SpotifyService) {
    _spotify.getNewReleases();
    http.get('https://restcountries.com/v3.1/lang/spanish').subscribe(
      (data) => {
        this.paises = data;
        console.log(this.paises);
      },
      (e) => {
        console.error(e);
      }
    );
  }
}
