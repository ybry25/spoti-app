import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  loading: boolean = true;
  id: string = '';
  artist: any = {};
  artistsAlbums: any = {};
  artistsTopTracks: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;
    });

    // this.id = activatedRoute.snapshot.paramMap.get('id');

    this.getArtist(this.id);
    this.getArtistsAlbums(this.id);
    this.getTopTracks(this.id);
  }

  getArtist(id: string) {
    this.spotifyService.getArtistId(id).subscribe((data) => {
      this.artist = data;
      this.loading = false;
    });
  }

  getArtistsAlbums(id: string) {
    this.spotifyService.getArtistsAlbums(id).subscribe((data) => {
      console.log(data);
      this.artistsAlbums = data;
    });
  }
  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe((data) => {
      console.log(data);
      this.artistsTopTracks = data;
    });
  }
}
