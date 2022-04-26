import { Component, OnInit } from '@angular/core';
import { GetApiMovieDataService } from '../services/getApiMovieData/get-api-movie-data.service';

@Component({
  selector: 'app-ex8-loading',
  templateUrl: './ex8-loading.component.html',
  styleUrls: ['./ex8-loading.component.scss']
})
export class Ex8LoadingComponent implements OnInit {

  constructor(private getMovie:GetApiMovieDataService) { }

 ngOnInit(): void {
  this.movieData()
  }
  //variavel responsavel por guardar os dados da api
  response:any;
  loaded = 0
  //funcao encarregada de chamar uma funcao de dentro do service
  async movieData(){
    await this.timer()
    this.response =  await this.getMovie.getApiMovieData(500)
     this.loaded = 1
     console.log(this.response)
  }

  timer(){
    return new Promise<void>(resolve=>{
      setTimeout(() => {
        resolve()
      }, 2000);
    })
  }
}
