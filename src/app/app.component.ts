import { Component } from '@angular/core';
import { MyHeaders } from './my-table/my-table-config';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prova Tabella';

  headers: MyHeaders[] | undefined;
  data: any[] | undefined;

  constructor(private myTableService: TableService) { }

  ngOnInit(): void {
    if(!this.headers)
        this.headers = this.myTableService.getHeaders()
    if(!this.data){
      this.myTableService.getData()
        .subscribe((data : any) => {
          this.data = data;
      });
    }
  }
}
