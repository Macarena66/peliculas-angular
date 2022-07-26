import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaAleatoriaComponent } from './components/pelicula-aleatoria/pelicula-aleatoria.component';

const routes: Routes = [

  /* ruta raíz */
  { path: '', redirectTo: '/pelicula/aleatoria', pathMatch: 'full'},

  { path: 'peliculas/', component: PeliculasComponent },
  { path: 'pelicula/aleatoria', component: PeliculaAleatoriaComponent },

  /* ruta 404 */
  { path: '**', component: PeliculasComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
