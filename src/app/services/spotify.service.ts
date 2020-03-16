import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {

  }

  getNewReleases() {

    const headers = new HttpHeaders({
        Authorization: 'Bearer BQDakGlsK-BkCVkEMHDTy5foz5NpixVCrMidVbV-wUrHNmGiwLTrOVT-aSHoa5SgWWeuiYvjSmuvbvlPSLQ'
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers } )
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['albums'].items)
      );
  }

  getArtista( terminoBUsqueda: string ) {

    const headers = new HttpHeaders({
        Authorization: 'Bearer BQBN37Pd74v5g6mLvRtiDXTYVzDX6MlMjKmP4wRQTR75rXGsESpikaoMG_b4fQmvw6lAxSZMsu97lYQ9APM'
    });

    return this.http
      .get(`https://api.spotify.com/v1/search?q=${terminoBUsqueda}&type=artist&limit=20`, { headers } )
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map(data => data['artists'].items )
      );
  }
}
