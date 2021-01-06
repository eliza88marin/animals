import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AnimalService} from './service/animal.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AnimalTableComponent } from './components/animal-table/animal-table.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimalTableComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]

})
export class AppModule { }
