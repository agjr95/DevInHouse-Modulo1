import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {
  tabuleiro:string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
jogadorAtual:string = 'Aliança Rebelde';
nroDeJogadas: number = 0;
gameOver:boolean = false;
mensagem:string = ''
segundos:number = 30;
timer:any;
vencedor:string = '';
rodadaVencida:boolean = false
iniciaCronometro:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.cronometro()
  }

  jogada(lin:number,col:number){
    console.log(`A célula clicada foi da posição linha: ${lin} - col: ${col}`)
    if(this.tabuleiro[lin][col] == '' && this.vencedor == ''){
      this.nroDeJogadas++
      this.iniciaCronometro = true
      this.tabuleiro[lin][col] = this.jogadorAtual;
      
      if(this.nroDeJogadas >= 9){
        this.gameOver = true
        this.mensagem = 'Empate! Limite máximo de jogadas atingido'
      }
      if(this.jogadorVencedor(this.jogadorAtual)){
         this.vencedor = this.jogadorAtual
         clearInterval(this.timer)
         this.rodadaVencida = true
      }
      
      if(this.jogadorAtual == 'Aliança Rebelde'){
        this.jogadorAtual = 'Império Galático'
       
      }else {
        this.jogadorAtual = 'Aliança Rebelde'
        
      }
    }
  
    
  }
  jogadorVencedor(jogador:string):boolean{
    for(let i = 0; i < this.tabuleiro.length; i++){
      if(this.tabuleiro[i][0] == jogador && this.tabuleiro[i][1] == jogador && this.tabuleiro[i][2] == jogador){
       return true 
      }
      if(this.tabuleiro[0][i] == jogador && this.tabuleiro[1][i] == jogador && this.tabuleiro[2][i] == jogador){
       return true
      }
    }
    if(this.tabuleiro[0][0] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][2] == jogador){
     return true
    }
    if(this.tabuleiro[0][2] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][0] == jogador){
     return true
    }
    return false
  }

  reiniciar(){
    this.jogadorAtual = 'Aliança Rebelde'
    this.tabuleiro = [
      ['','',''],
      ['','',''],
      ['','','']
    ]
    this.rodadaVencida = false
    this.nroDeJogadas = 0
    this.gameOver = false
    this.segundos = 30
    clearInterval(this.timer)
   this.vencedor = ''
    this.cronometro()
  }

  cronometro(){
    this.timer = setInterval(()=>{
      if(this.segundos > 0){
        this.segundos --
      }else{
          this.mensagem = 'Tempo esgotado'
          this.gameOver = true
          clearInterval(this.timer)
      }
    },1000)
  }

}
