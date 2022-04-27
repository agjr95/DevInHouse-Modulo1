import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { Ex1LoginComponent } from './ex1-login/ex1-login.component';
import { Ex2BuscaComponent } from './ex2-busca/ex2-busca.component';
import { Ex3CalculoComponent } from './ex3-calculo/ex3-calculo.component';
import { Ex4FormComponent } from './ex4-form/ex4-form.component';
import { Ex5ValidatorComponent } from './ex5-validator/ex5-validator.component';
import { Ex6APIComponent } from './ex6-api/ex6-api.component';
import { Ex7ApiServiceComponent } from './ex7-api-service/ex7-api-service.component';
import { Ex8LoadingComponent } from './ex8-loading/ex8-loading.component';
import { LoadingComponent } from './loading/loading.component';
import { Ex9PopularComponent } from './ex9-popular/ex9-popular.component';
//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//services
import { GetApiMovieDataService } from './services/getApiMovieData/get-api-movie-data.service';
import { Ex10Top3Component } from './ex10-top3/ex10-top3.component';






@NgModule({
  declarations: [
    //compoenentes
    AppComponent,
    Ex1LoginComponent,
    Ex2BuscaComponent,
    Ex3CalculoComponent,
    Ex4FormComponent,
    Ex5ValidatorComponent,
    Ex6APIComponent,
    Ex7ApiServiceComponent,
    Ex8LoadingComponent,
    LoadingComponent,
    Ex9PopularComponent,
    Ex10Top3Component,
  
   
  ],
  imports: [
    //modulos e alguns pacotes npm
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    //services
    GetApiMovieDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
