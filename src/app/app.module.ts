import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { JuegoComponent } from './components/juego/juego.component';
import { PeliculaAleatoriaComponent } from './components/pelicula-aleatoria/pelicula-aleatoria.component';
import { AnfitrionesComponent } from './components/anfitriones/anfitriones.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    JuegoComponent,
    PeliculaAleatoriaComponent,
    AnfitrionesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
