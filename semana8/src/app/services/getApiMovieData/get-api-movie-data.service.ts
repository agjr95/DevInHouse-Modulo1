import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetApiMovieDataService {

  constructor(private http:HttpClient) { }
 
  public getApiMovieData(movieCode:any){
    return new Promise<any>((resolve)=>{
      this.http.get(`${environment.movieApi}/${movieCode}?api_key=${environment.apiKey}`)
      .subscribe(data=>{
        resolve(data)
      
      })
      
    }) 
  }

  public getPopularMovie(){
    return new Promise<any>((resolve)=>{
      this.http.get(`${environment.movieApi}/popular?api_key=${environment.apiKey}&language=en-US&page=1`)
      .subscribe(data=>{
        resolve(data)
      
      })
      
    }) 
  }
}
