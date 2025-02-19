import { Component, Input } from '@angular/core';
import { TableService } from '../table.service';
import { MyHeaders } from './my-table-config';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})

export class MyTableComponent {
  @Input() headers: MyHeaders[] | undefined;
  @Input() data: any[] | undefined;
  sortedColumn: string = '';
  order: 'asc' | 'desc' = 'asc';

  constructor(private myTableService: TableService) { }

  ngOnInit(): void {
    if(!this.headers){
      this.myTableService.getHeaders()
        .subscribe((headers: MyHeaders[]) => {
          this.headers = headers;
        })
    }
    if(!this.data){
      this.myTableService.getData()
        .subscribe((data : any) => {
          this.data = data;
      });
    }
  }

  ordinaColonna(column: MyHeaders) {
    if (this.sortedColumn === column.field) {
      this.order = this.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column.field;
      this.order = column.sorting || 'asc';
    }

    if (!this.data) 
      return;
    this.data.sort((a, b) => {
      if (a[column.field] < b[column.field]) {
        return this.order === 'asc' ? -1 : 1;
      } else if (a[column.field] > b[column.field]) {
        return this.order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
