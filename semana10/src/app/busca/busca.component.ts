import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  @Output() outputValor:EventEmitter<any> = new EventEmitter<any>()
  armazenaInput:string = '';

  constructor() { }

  ngOnInit(): void {
  }
valorInput(event:any){
  this.outputValor.emit(this.armazenaInput)
}
}