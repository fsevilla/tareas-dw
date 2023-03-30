import { Component, OnInit } from '@angular/core';

import { DataListColumn } from 'src/app/shared/interfaces/data-list-column';
import { Tarea } from 'src/app/shared/interfaces/tarea';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  tareas: Tarea[] = [];

  tareaSeleccionada: Tarea = {
    title: ''
  };

  columnas: DataListColumn[] = [
    { header: 'ID', property: 'id' },
    { header: 'Titulo', property: 'title' },
    { header: 'Terminada', property: 'completed' }
  ]
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.traerTareas();
  }

  traerTareas() {
    this.todoService.buscar().subscribe({
      next: (response: Tarea[]) => {
        console.log('Respuesta: ', response);
        this.tareas = response;
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  }

  seleccionarTarea(tarea: Tarea) {
    console.log('Seleccionaste una tarea ' + tarea.id, tarea)
    this.tareaSeleccionada = tarea;
  }

  limpiarTarea() {
    this.tareaSeleccionada = {
      title: ''
    }
  }
}



