import { Component, OnInit } from '@angular/core';
import { GetApiMovieDataService } from '../services/getApiMovieData/get-api-movie-data.service';

@Component({
  selector: 'app-ex7-api-service',
  templateUrl: './ex7-api-service.component.html',
  styleUrls: ['./ex7-api-service.component.scss']
})
export class Ex7ApiServiceComponent implements OnInit {

  constructor(private getMovie:GetApiMovieDataService) { }

 ngOnInit(): void {
  this.movieData()
  }
  //variavel responsavel por guardar os dados da api
  response:any;
  //funcao encarregada de chamar uma funcao de dentro do service
  async movieData(){
     this.response = await this.getMovie.getApiMovieData(250)
     console.log(this.response)
  }
}
