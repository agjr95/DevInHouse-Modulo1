import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { AuthService } from './service/auth.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SerieComponent } from './view/serie/serie.component';
import { AtoresComponent } from './view/atores/atores.component';
import { MenuComponent } from './components/menu/menu.component';
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { InformarEmailComponent } from './components/informar-email/informar-email.component';
import { Page404Component } from './view/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent,
    NavBarComponent,
    SerieComponent,
    AtoresComponent,
    MenuComponent,
    FullComponent,
    ContentComponent,
    InformarEmailComponent,
    Page404Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
