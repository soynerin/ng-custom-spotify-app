import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {

  }

  getNewReleases() {

    const headers = new HttpHeaders({
        Authorization: 'Bearer BQBhSQloUMuFsjmcLF9E79DfoynlMFgWedXaXr8ThKxPxLX2BP1InPVsmo39Wlw6v5ZvumP8pns_WiHO_8g'
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers } );
  }
}
