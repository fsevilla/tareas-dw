import { Component } from '@angular/core';

export interface Todo {
  title?: string;
  description?: string;
  status?: number;
  fecha?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  nombre: string = '';

  mostrar: boolean = false;

  todo: Todo = {};

  constructor() {
    setTimeout(() => {
      this.nombre = 'Jose';
    }, 5000);
  }

  saludar(name?: string): void {
    name = name ? name : '';
    alert('Hola mundo ' + name);
  }

  mostrarOcultar() {
    this.mostrar = !this.mostrar;
  }
}


