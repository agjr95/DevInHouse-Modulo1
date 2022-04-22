import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginEx1Component } from './login-ex1/login-ex1.component';
import { BuscaEx2Component } from './busca-ex2/busca-ex2.component';
import { CalculoInputsEx3Component } from './calculo-inputs-ex3/calculo-inputs-ex3.component';

@NgModule({
  declarations: [
    //compoenentes
    AppComponent,
    LoginEx1Component,
    BuscaEx2Component,
    CalculoInputsEx3Component,
   
  ],
  imports: [
    //modulos e alguns pacotes npm
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
