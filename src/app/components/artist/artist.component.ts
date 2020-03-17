import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  topTracks: any[] = [];
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.activatedRoute.params.subscribe(
      params =>  {
        // tslint:disable-next-line: no-string-literal
        this.getArtista(params['id']);
        // tslint:disable-next-line: no-string-literal
        this.getTopTracks(params['id']);
      }
    );

  }

  ngOnInit(): void {
  }

  getArtista( id: string ) {
    this.isLoading = true;

    this.spotifyService.getArtista(id)
      .subscribe(data => {
          this.artist = data;
          this.isLoading = false;
        });
  }

  getTopTracks( id: string ) {
    this.isLoading = true;

    this.spotifyService.getTopTracks(id)
    .subscribe(data => {
      this.topTracks = data;
      console.log(data);
      this.isLoading = false;
    });
  }
}
