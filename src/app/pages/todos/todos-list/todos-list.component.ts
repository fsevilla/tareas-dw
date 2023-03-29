import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  tareas: any[] = [];
  tareasFiltradas: any[] = [];

  buscar: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.traerTareas();
  }

  traerTareas() {
    this.todoService.buscar().subscribe({
      next: (response) => {
        console.log('Respuesta: ', response);
        this.tareas = response;
        this.tareasFiltradas = this.tareas;
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  }

  filtrar() {
    const buscar = this.buscar.toLowerCase();
    this.tareasFiltradas = this.tareas.filter(item => {
      return item.title.toLowerCase().includes(buscar);
    })
  }

}



