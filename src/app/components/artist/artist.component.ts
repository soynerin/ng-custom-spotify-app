import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    // tslint:disable-next-line: no-string-literal
    this.activatedRoute.params.subscribe( params => console.log(params['id']) );
  }

  ngOnInit(): void {
  }
}
