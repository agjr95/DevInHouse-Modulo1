import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-busca',
  templateUrl: './ex2-busca.component.html',
  styleUrls: ['./ex2-busca.component.scss']
})
export class Ex2BuscaComponent implements OnInit {

  armazena:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  busca(){
    return this.armazena

  }

}
