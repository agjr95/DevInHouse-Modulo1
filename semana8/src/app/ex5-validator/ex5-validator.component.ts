import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ex5-validator',
  templateUrl: './ex5-validator.component.html',
  styleUrls: ['./ex5-validator.component.scss']
})
export class Ex5ValidatorComponent implements OnInit {

  _data: FormGroup = this._formBuilder.group({
    nome: ['',[Validators.minLength(3),Validators.required]],
    email:['',[Validators.email,Validators.required]],
    nomeFilme:['',[Validators.minLength(3),Validators.required]],
    avaliacao:['',[Validators.required]]
  })

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  enviar(){
    if(this._data.valid){
      console.log('data:' + this._data)
      alert(`Formulário do filme ${this._data.value.nomeFilme}`)
    }else{
      alert('Formulário inválido')
    }
  }

}
