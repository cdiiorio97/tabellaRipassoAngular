import { Component, Input } from '@angular/core';
import { MyHeaders } from './my-table-config';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})

export class MyTableComponent {
  @Input() headers: MyHeaders[] | undefined;
  @Input() data: any[] | undefined;
  originalData: any[] | undefined;
  sortedColumn: string = '';
  order: 'asc' | 'desc' = 'asc';
  filteredData: any[] = [];
  filtro: { [key: string]: string } = {};
  pagina: number = 1;
  elementiPerPagina: number = 8;

  ngOnInit(): void {
    this.originalData = this.data;
    this.filteredData = this.data || [];
    this.filtro = {};
  }

  ordinaColonna(column: MyHeaders) {
    if (this.sortedColumn === column.field)   
        this.order = this.order === 'asc' ? 'desc' : 'asc';
    else {
      this.sortedColumn = column.field;
      this.order = column.sorting || 'asc';
    }

    if (!this.data) 
      return;
    this.data.sort((a, b) => {
      if (a[column.field] < b[column.field]) 
        return this.order === 'asc' ? -1 : 1;
      else if (a[column.field] > b[column.field]) 
        return this.order === 'asc' ? 1 : -1;
      else
        return 0;
    });
  }

  aggiornaFiltro(event: Event, field: string) {
    const target = event.target as HTMLInputElement;
    if(target.value === '') {
      delete this.filtro[field];
      this.data = this.originalData;
      return;
    }
    else {
      this.filtro[field] = target.value;
      this.filter();
    }
  }

  filter() {
    if (!this.originalData) 
      return;
    let arrayTemp: any[] = [];
    if(Object.keys(this.filtro).length != 0){
      arrayTemp = this.filteredData.filter(elem => { 
        return Object.keys(this.filtro).every(field => {
          if (this.filtro[field]) {
            const value = elem[field] ? elem[field].toString().toLowerCase() : '';
            this.cambiaPagina(1);
            return value.includes(this.filtro[field].toString().toLowerCase());
          }
          return true;
        });
      });
    };
    return  this.filteredData = arrayTemp.length === 0 ? this.originalData : arrayTemp;
  }

  cambiaPagina(pagina: number) {
    this.pagina = pagina;
  }

  get numeroPagine(): number[] {
    const totalPages = Math.ceil(this.filteredData.length / this.elementiPerPagina);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  

}
