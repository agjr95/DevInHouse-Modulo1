import { Component, OnInit } from '@angular/core';
import { GetApiMovieDataService } from '../services/getApiMovieData/get-api-movie-data.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  response:any;
  // movie:any;
  top3:any=[];
  // indice:number = 0;

  constructor(private getMovie:GetApiMovieDataService) { }

  ngOnInit(): void {
    this.top3movies()
  }

  async top3movies(){
    this.response = await this.getMovie.getPopularMovie()
    this.top3 = this.response.results.slice(0,3)
    // this.movie = this.top3[this.indice]
    console.log(this.top3)
  }

}
