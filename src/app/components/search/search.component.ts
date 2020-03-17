import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  isLoading = true;

  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
    this.isLoading = false;
  }

  buscarArtista( terminoBusqueda: string ) {

    if (terminoBusqueda.length > 0) {
      this.isLoading = true;
      this.spotifyService.getArtista( terminoBusqueda )
        .subscribe( (data: any) => {
          this.artists = data;
          this.isLoading = false;
        } );
    }

  }
}
