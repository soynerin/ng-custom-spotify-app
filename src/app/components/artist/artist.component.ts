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
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.activatedRoute.params.subscribe(
      // tslint:disable-next-line: no-string-literal
      params =>  this.getArtista(params['id'])
    );

  }

  ngOnInit(): void {
  }

  getArtista( id: string ) {
    this.isLoading = true;

    this.spotifyService.getArtista(id)
      .subscribe(data =>
        {
          this.artist = data;
          this.isLoading = false;
        });
  }
}
