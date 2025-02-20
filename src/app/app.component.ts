import { Component } from '@angular/core';
import { MyTableConfig } from './my-table/my-table-config';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prova Tabella';
  tableConfig: MyTableConfig | undefined;
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
      pagination: { itemPerPage: 8 },
      actions: [
        { label: "EDIT", 
          css: {
            "margin-top": "5px", 
            "height": "30px", 
            "margin-right": "5px", 
            "border-radius": "10px",
            "border-color": "lightblue", 
            "background-color": "lightblue"
          } 
        },
        { label: "DELETE", 
          css: {
            "margin-top": "5px",
            "height": "30px", 
            "background-color": "red", 
            "border-radius": "10px"
          } 
        },
        { label: "ADD NEW", 
          css: {
            "margin-top": "20px", 
            "height": "30px", 
            "width": "200px",
            "border-radius": "10px"
          }
        }
      ]
    };
  }
}
