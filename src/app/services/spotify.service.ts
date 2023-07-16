import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  id: any;

  constructor(private http: HttpClient) {
    console.warn('servicio Spotify');
    // this.getToken();
  }

  getNewReleases<Observable>() {
    const headers = {
      Authorization:
        'Bearer BQDPOFxZaUYt68srQJ440QNQpE7nbWMIKzPa1cpzRQcighkJ4LNWbq1sKD1uwePXTIVeEKMvGpA-pTFJFj7JwRT9v5LnluPpMQWq3CmHQcMICHcZ7Q8',
    };

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        headers,
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (e) => {
          console.error(e);
        }
      );
    return 0;
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
      .subscribe(
        (data) => {
          console.log(data);
          this.id = data;
        },
        (e) => {
          console.error(e);
        }
      );
    // return await this.id.access_token;
    // console.log(this.id.access_token);
  }
}
