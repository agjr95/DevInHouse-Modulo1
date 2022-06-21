import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsComponent } from './star-wars/star-wars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starWars',
    pathMatch: 'full',
  },
  {
    path: 'starWars',
    component: StarWarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
