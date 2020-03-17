import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
        Authorization: 'Bearer BQDg3-Pp0vyvyp_4ARlncyBEcUxURDYdq__zmvD2FLgUQeJmIRzkcKwLJ0fZH6j7B7lPd-NDkHqrlP3aMVA'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this
      .getQuery('browse/new-releases')
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['albums'].items)
      );
  }

  getArtistas( terminoBUsqueda: string ) {

    return this
      .getQuery(`search?q=${terminoBUsqueda}&type=artist&limit=20`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['artists'].items)
      );
  }

  getArtista( id: string ) {

    return this
      .getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {

    return this
      .getQuery(`artists/${ id }/top-tracks?country=es`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['tracks'])
      );
  }
}
