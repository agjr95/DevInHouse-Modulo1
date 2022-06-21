import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { Home2Component } from './home2/home2.component';
import { Serie2Component } from './serie2/serie2.component';


@NgModule({
  declarations: [
    Home2Component,
    Serie2Component
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
