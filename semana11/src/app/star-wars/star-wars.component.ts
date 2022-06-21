import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarWars } from '../classes/star-wars';
import { StarWarsInterface } from '../interfaces/star-wars-interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit {
  characters: StarWars[] = [];
  singleChar!: StarWars[];
  public formulario: FormGroup = this._fb.group({
    id: [],
    nome: [''],
    habilidade: [''],
    planeta: [''],
    armas: [''],
    avatar: [''],
  });
  constructor(private _api: ApiService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAll();
    this.getByID(5);
  }
  newCharacter() {
    this._api.postChar(this.formulario.value).subscribe(() => {
      console.log();
    });
  }
  public getAll() {
    return this._api.getChars().subscribe((feedback) => {
      this.characters = feedback.map((character) => {
        return new StarWars(
          character.id,
          character.nome,
          character.habilidade,
          character.planeta,
          character.armas,
          character.avatar
        );
      });
      console.log(this.characters);
    });
  }
  public getByID(id: number) {
    return this._api.idChar(id).subscribe((feedback) => {
      console.log(feedback);
    });
  }
  editChar() {}
}
