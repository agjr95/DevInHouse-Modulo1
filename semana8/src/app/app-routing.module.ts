import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEx1Component } from './login-ex1/login-ex1.component';
import { BuscaEx2Component } from './busca-ex2/busca-ex2.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login-ex1',
    pathMatch: 'full'
  },
  {
    path:'login-ex1',
    component:LoginEx1Component
  },
  {
    path:'busca-ex2',
    component: BuscaEx2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
