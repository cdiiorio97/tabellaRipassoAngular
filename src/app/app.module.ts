import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { FormsModule } from '@angular/forms';
import { PaginazionePipe } from './paginazione.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    PaginazionePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
