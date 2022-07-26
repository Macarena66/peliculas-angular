import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../modelos/pelicula';
import { PeliculasService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pelicula-aleatoria',
  templateUrl: './pelicula-aleatoria.component.html',
  styleUrls: ['./pelicula-aleatoria.component.css']
})
export class PeliculaAleatoriaComponent implements OnInit {

  pelicula?: Pelicula;

  constructor(private PeliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculaAleatoria();
  }

  async obtenerPeliculaAleatoria(){
    this.pelicula = await this.PeliculasService.obtenerPeliculaAleatoria();
    console.log(this.pelicula);
  }
  onActualizar() {
    this.obtenerPeliculaAleatoria();
  }
}
