import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ex1LoginComponent } from './ex1-login/ex1-login.component';
import { Ex2BuscaComponent } from './ex2-busca/ex2-busca.component';
import { Ex3CalculoComponent } from './ex3-calculo/ex3-calculo.component';

//modulos
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ex4FormComponent } from './ex4-form/ex4-form.component';


@NgModule({
  declarations: [
    //compoenentes
    AppComponent,
    Ex1LoginComponent,
    Ex2BuscaComponent,
    Ex3CalculoComponent,
    Ex4FormComponent,
   
  ],
  imports: [
    //modulos e alguns pacotes npm
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    //services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
