import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ex4-form',
  templateUrl: './ex4-form.component.html',
  styleUrls: ['./ex4-form.component.scss']
})
export class Ex4FormComponent implements OnInit {
  _data: FormGroup = this._formBuilder.group({
    nome: [''],
    email:[''],
    nomeFilme:[''],
    avaliacao:[]
  })

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  enviar(){
    console.log(this._data.value)
    alert('Formulário enviado')
  }
}
