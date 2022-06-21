import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AuthGuard } from './service/guard/auth.guard';
import { AuthService } from './service/auth.service';
import { SerieComponent } from './view/serie/serie.component';
import { AtoresComponent } from './view/atores/atores.component';
import { BuscaComponent } from './busca/busca.component';
import { MenuComponent } from './components/menu/menu.component';
import { InformarEmailComponent } from './components/informar-email/informar-email.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'email',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    // canLoad:[
    //   AuthGuard
    // ],
    // canActivate:[
    //   AuthGuard
    // ]
  },
  {
    path:'serie',
    component:SerieComponent
  },
  {
    path:'atores',
    component:AtoresComponent
  },
  {
    path:'busca',
    component:BuscaComponent
  },
  {
    path:'email',
    component:InformarEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
