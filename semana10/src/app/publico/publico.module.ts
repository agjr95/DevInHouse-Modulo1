import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';


@NgModule({
  declarations: [
    LoginComponent,
    EsqueciSenhaComponent
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule
  ]
})
export class PublicoModule { }
