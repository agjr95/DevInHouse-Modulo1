import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  private _formulario:FormGroup = this._formBuilder.group({
    nome:[''],
    email:[''],
    nomeFilme:[''],
    avaliacao:[]
  })

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
enviar(){
  alert('Formulário enviado')
}
}
