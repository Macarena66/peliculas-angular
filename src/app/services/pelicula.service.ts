import { Injectable } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  URL_PELICULAS = 'api'

  constructor() { }

  async obtenerPeliculaAleatoria(): Promise<Pelicula> {
    const respuesta = await fetch(`${this.URL_PELICULAS}/pelicula/aleatoria`);
    return await respuesta.json();
  }

  async obtenerPeliculasPorPaginacion(
    numElementos: number,
    numPagina: number
  ): Promise<Pelicula[]> {
    const respuesta = await fetch(`${this.URL_PELICULAS}/peliculas?num=${numElementos}&pagina=${numPagina}`)
    return await respuesta.json();
  }

  async obtenerPeliculaPorTermino(termino: string): Promise<Pelicula[]> {
    const respuesta = await fetch(`${this.URL_PELICULAS}/pelicula/buscar?termino=${termino}`)
    return await respuesta.json();
  }
}
