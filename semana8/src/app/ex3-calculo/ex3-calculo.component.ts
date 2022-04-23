import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-calculo',
  templateUrl: './ex3-calculo.component.html',
  styleUrls: ['./ex3-calculo.component.scss']
})
export class Ex3CalculoComponent implements OnInit {
  input1 = 0
  input2 = 0 
  calculo = 0
 
  
   constructor() {
     
    }
 
   ngOnInit(): void {
   }
   calcular(){
     this.calculo = this.input1 + this.input2
    
   }
   limpar(){
     this.input1 = 0
     this.input2 = 0
     
     
   }
}
