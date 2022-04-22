import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-ex2',
  templateUrl: './busca-ex2.component.html',
  styleUrls: ['./busca-ex2.component.scss']
})
export class BuscaEx2Component implements OnInit {
  armazena:any =[]
  constructor() { }

  ngOnInit(): void {
  }

  busca(event:any){
    return this.armazena += event.key

  }
  
    
  
  
}
