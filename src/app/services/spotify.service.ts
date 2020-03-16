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
        Authorization: 'Bearer BQC0RGj--oCZXEkALbxqSLyLj_DgVDttrNq0DLNQbkfghGpxreZt7yrQAuq91Lwshc9zTgICRCGj_pQwrXA'
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

  getArtista( terminoBUsqueda: string ) {

    return this
      .getQuery(`search?q=${terminoBUsqueda}&type=artist&limit=20`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['artists'].items)
      );
  }
}
