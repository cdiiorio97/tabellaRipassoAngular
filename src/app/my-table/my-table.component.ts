import { Component, Input } from '@angular/core';
import { HEADERS_MOCK } from '../mock-data';
import { TableService } from '../table.service';
import { MyHeaders } from '../my-headers.interface';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {
  @Input() headers: MyHeaders[] | undefined;
  @Input() data: any[] | undefined;
  colonnaOrdinata: string = '';
  direzioneOrdinamento: 'asc' | 'desc' = 'asc';

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

  ordinaColonna(colonna: MyHeaders) {
    if (this.colonnaOrdinata === colonna.field) {
      this.direzioneOrdinamento = this.direzioneOrdinamento === 'asc' ? 'desc' : 'asc';
    } else {
      this.colonnaOrdinata = colonna.field;
      this.direzioneOrdinamento = colonna.sorting || 'asc';
    }

    if (!this.data) 
      return;
    this.data.sort((a, b) => {
      if (a[colonna.field] < b[colonna.field]) {
        return this.direzioneOrdinamento === 'asc' ? -1 : 1;
      } else if (a[colonna.field] > b[colonna.field]) {
        return this.direzioneOrdinamento === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
