import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chave:AuthService) { }

  ngOnInit(): void {
  }
  valorRecebido(event:string){
    console.log(`Evento do componente busca: ${event}`)
    console.log(event)
  }
  // abraTeCesamo(){
  //   console.log(this.chave.isLoggedIn)
  //   this.chave.isLoggedIn = !this.chave.isLoggedIn
  // }
}
