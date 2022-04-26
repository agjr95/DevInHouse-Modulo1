import { Component, OnInit } from '@angular/core';
import { GetApiMovieDataService } from '../services/getApiMovieData/get-api-movie-data.service';

@Component({
  selector: 'app-ex9-popular',
  templateUrl: './ex9-popular.component.html',
  styleUrls: ['./ex9-popular.component.scss']
})
export class Ex9PopularComponent implements OnInit {

  constructor(private getMovie:GetApiMovieDataService) { }

 ngOnInit(): void {
  this.popularMovies()
  }
  response:any;
  first:any;
  async popularMovies(){
    this.response = await this.getMovie.getPopularMovie()
    this.first = this.response.results[0]
    console.log('-- data --')
    console.log(this.first)
  }
}
