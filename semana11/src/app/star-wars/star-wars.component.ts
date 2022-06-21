import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit {
  idNro: number = 5;
  public formulario: FormGroup = this._fb.group({
    id: [],
    nome: [''],
    habilidade: [''],
    planeta: [''],
    armas: [''],
    avatar: [''],
  });
  constructor(private _getApi: GetApiService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this._getApi.obterTodos();
    this._getApi.obterPorId(this.idNro);
  }
  novoPersonagem() {
    this._getApi.postPersonagem(this.formulario.value).subscribe(() => {
      console.log();
    });
  }
  editarPersonagem() {}
}
