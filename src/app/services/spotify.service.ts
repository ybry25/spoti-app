import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  id: any =
    'QD0ERZs1uypMVrd-o9LlS1mxyoQy7AB525R6-BvOduVCYdlE0rlx3LHzDX9x8cn-t6IFUkUfR5YPv4zYhELdypNF27zT2xhjl0ewnbjtup_yNxF8Cw';

  constructor(private http: HttpClient) {
    console.warn('servicio Spotify');
    // this.id = this.getToken();
    console.log(this.id);
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = {
      Authorization: `Bearer ${this.id}`,
    };

    return this.http.get(url, { headers });
  }

  getNewReleases<Observable>() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtistId(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }

  getArtistsAlbums(id: string) {
    return this.getQuery(`artists/${id}/albums`).pipe(
      map((data: any) => data.items)
    );
  }
}
