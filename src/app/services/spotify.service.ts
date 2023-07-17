import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  id: any;
  // =    'BQCV2QAqG6DZXPmAnNuKt-UFNHtw8dnK2e7K-jkXFBQeEJr_pNO3yfYJzBx4i1SnnaQQQK0zgUlMkaneigy4sBUnxSJ9wFHoCMcAuKLfq9uhrgLL3rw';

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

  getArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getToken<Observable>() {
    let body = new HttpParams({
      fromObject: {
        grant_type: 'client_credentials',
        client_id: '317e305e179f4ac6aa5678da05cb9b58',
        client_secret: 'e9bcf7ce75d54a1db428fc19f3b7c4a2',
      },
    });

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    this.http
      .post(
        'https://accounts.spotify.com/api/token',
        body.toString(),
        httpOptions
      )
      .subscribe((data: any) => {
        console.log(data.access_token);

        return data.access_token;
      });
  }
}
