import { Component } from '@angular/core';
import data from '../assets/Libros.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'Libros';
  libros: any [] = data;
  librofiltrados: any [] = [];
  filterText: string = "";
  libroSeleccionado: any = {};
  filtrar() {
    this.librofiltrados = this.libros.filter(libro => {
      return libro.titulo.toLowerCase().includes(this.filterText.toLowerCase());
    });
  }
  ordenarPorTitulo() {
    this.librofiltrados.sort((a, b) => {
      if (a.titulo < b.titulo) {
        return -1;
      }
      if (a.titulo > b.titulo) {
        return 1;
      }
      return 0;
    });
  }
  ordenarPorEditorial() {
    this.librofiltrados.sort((a, b) => {
      if (a.editorial < b.editorial) {
        return -1;
      }
      if (a.editorial > b.editorial) {
        return 1;
      }
      return 0;
    });
  }
  seleccionarLibro(libro: any) {
    this.libroSeleccionado = libro;
    console.log(this.libroSeleccionado);
  }
  constructor() {
    console.log(this.libros);
    this.librofiltrados = this.libros;
  }
}


