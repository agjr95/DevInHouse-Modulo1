import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6-api',
  templateUrl: './ex6-api.component.html',
  styleUrls: ['./ex6-api.component.scss']
})
export class Ex6APIComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getApiMovieData()
  }

  getApiMovieData(){
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=75c76e7130b4235e90722a26ebd1eb26')
    .subscribe(data=>{
      console.log(data)
    })
  }

}
