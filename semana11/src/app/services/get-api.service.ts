import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StarWars } from '../classes/star-wars';
import { StarWarsInterface } from '../interfaces/star-wars-interface';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  personagens!: StarWarsInterface[];
  unicoPersonagem!: StarWarsInterface[];
  url = environment.API_PATH;
  constructor(private _httpClient: HttpClient) {}

  public getPersonagens(): Observable<StarWars[]> {
    return this._httpClient.get<StarWars[]>(this.url);
  }
  public postPersonagem(info: StarWarsInterface): Observable<StarWars[]> {
    return this._httpClient.post<StarWars[]>(this.url, info);
  }

  public putPersonagem(
    id: number,
    info: StarWarsInterface
  ): Observable<StarWars[]> {
    return this._httpClient.put<StarWars[]>(`${this.url}/${id}`, info);
  }
  public idPersonagem(id: number): Observable<StarWars[]> {
    return this._httpClient.get<StarWars[]>(`${this.url}/${id}`);
  }

  public obterTodos() {
    return this.getPersonagens().subscribe((retorno) => {
      this.personagens = retorno;
      console.log(this.personagens);
    });
  }

  public obterPorId(id: number) {
    return this.idPersonagem(id).subscribe((retorno) => {
      this.unicoPersonagem = retorno;
      console.log(this.unicoPersonagem);
    });
  }
}
