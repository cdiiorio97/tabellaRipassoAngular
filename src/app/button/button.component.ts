import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() row: any = null;  

  getClass() {
    switch (this.label.toLowerCase()) {
      case 'aggiungi':
        return 'add-button';
      case 'elimina':
        return 'delete-button';
      case 'modifica':
        return 'edit-button';
      default:
        return '';
    }  }
  
  onClick() {
    switch(this.label) {
      case "Aggiungi":
        console.log(this.label + " una nuova riga");
        break;
      default:
        console.log(this.label + " la riga " + JSON.stringify(this.row));
        break;
    }
  }

}
