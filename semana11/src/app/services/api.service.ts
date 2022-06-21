import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { StarWars } from '../classes/star-wars';
import { StarWarsInterface } from '../interfaces/star-wars-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.API_PATH;
  constructor(private _httpClient: HttpClient) {}

  public getChars() {
    return this._httpClient.get<StarWars[]>(this.url);
  }
  public postChar(info: StarWarsInterface) {
    return this._httpClient.post<StarWars[]>(this.url, info);
  }

  public putChar(id: number, info: StarWarsInterface) {
    return this._httpClient.put<StarWars[]>(`${this.url}/${id}`, info);
  }
  public idChar(id: number) {
    return this._httpClient.get<StarWars[]>(`${this.url}/${id}`);
  }
}
