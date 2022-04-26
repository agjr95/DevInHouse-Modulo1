import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-calculo',
  templateUrl: './ex3-calculo.component.html',
  styleUrls: ['./ex3-calculo.component.scss']
})
export class Ex3CalculoComponent implements OnInit {
  v1 = 0
  v2 = 0 
  resultado:string = ''
 
  
   constructor() {
     
    }
 
   ngOnInit(): void {
   }
   calcular(){
     const calculo = this.v1 + this.v2
     this.resultado = 'Resultado: '+ calculo
   }
   limpar(){
     this.v1 = 0
     this.v2 = 0
     this.resultado = ''
     
   }
}
