import { Component, OnInit } from '@angular/core';
import { GetApiMovieDataService } from '../services/getApiMovieData/get-api-movie-data.service';

@Component({
  selector: 'app-ex10-top3',
  templateUrl: './ex10-top3.component.html',
  styleUrls: ['./ex10-top3.component.scss']
})
export class Ex10Top3Component implements OnInit {

  response:any;
  movie:any;
  top3:any;
  indice:number = 0;

  constructor(private getMovie:GetApiMovieDataService) { }

  ngOnInit(): void {
    this.top3movies()
   
  }

  async top3movies(){
    this.response = await this.getMovie.getPopularMovie()
    this.top3 = this.response.results.slice(0,3)
    this.movie = this.top3[this.indice]
    console.log(this.top3)
  }

  nextMovie(){
    this.movie = this.top3[this.indice]
    if(this.indice === 2){
      this.indice= 0
    }else{
      
      this.indice ++
    }
    

  }
  prevMovie(){
    this.movie = this.top3[this.indice]
    if(this.indice === 0){
      this.indice= 2
    }else{
      
      this.indice --
    }
  }


}
