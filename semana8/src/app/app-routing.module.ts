import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1LoginComponent } from './ex1-login/ex1-login.component';
import { Ex2BuscaComponent } from './ex2-busca/ex2-busca.component';
import { Ex3CalculoComponent } from './ex3-calculo/ex3-calculo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'ex1-login',
    pathMatch: 'full'
  },
  {
    path:'ex1-login',
    component:Ex1LoginComponent
  },
  {
    path:'ex2-busca',
    component: Ex2BuscaComponent
  },
  {
    path:'ex3-calculo',
    component:Ex3CalculoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
