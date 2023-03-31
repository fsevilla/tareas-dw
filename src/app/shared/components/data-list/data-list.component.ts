import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { DataListColumn } from '../../interfaces/data-list-column';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnChanges {

  @Input() items: any[] = [];
  @Input() columns: DataListColumn[] = [];

  itemsFiltrados: any[] = [];

  @Input('item') itemSeleccionado: any = {};

  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  buscar: string = '';

  displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(changes['items']) {
      this.itemsFiltrados = this.items;
    }

    if(changes['columns']) {
      this.displayedColumns = this.columns.map(col => {
        return col.header;
      })
    }
  }

  filtrar() {
    const buscar = this.buscar.toLowerCase();
    this.itemsFiltrados = this.items.filter(item => {
      return item.title.toLowerCase().includes(buscar);
    })
  }

  seleccionarItem(item: any) {
    console.log('Seleccionaste el item: ', item);
    if(item == this.itemSeleccionado) {
      this.itemSeleccionado = {};
    } else {
      this.itemSeleccionado = {...item};
    }
    this.onSelected.emit(this.itemSeleccionado);
  }

}
