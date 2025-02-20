import { Component } from '@angular/core';
import { MyHeaders, MyTableConfig } from './my-table/my-table-config';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prova Tabella';
  tableConfig: MyTableConfig | undefined;

  headers: MyHeaders[] | undefined;
  data: any[] | undefined;

  constructor(private myTableService: TableService) { }

  ngOnInit(): void {
    if(!this.data){
      this.myTableService.getData()
        .subscribe((data : any) => {
          this.data = data;
      });
    }
      this.tableConfig = {
      headers: this.myTableService.getHeaders(),
      order: undefined,
      search: undefined,
      pagination: undefined,
      actions: [
        { label: "EDIT", css: this.styleEdit },
        { label: "DELETE", css: this.styleDelete },
        { label: "ADD NEW", css: this.styleAdd}
      ]
    };
  }

  styleEdit = {
    "margin-top": "5px", 
    "height": "30px", 
    "margin-right": "5px", 
    "border-radius": "10px",
    "border-color": "lightblue", 
    "background-color": "lightblue"
  }

  styleDelete = {
    "margin-top": "5px",
    "height": "30px", 
    "background-color": "red", 
    "border-radius": "10px"
  }

  styleAdd = {
    "margin-top": "20px", 
    "height": "30px", 
    "width": "200px",
    "border-radius": "10px"
  }
}
