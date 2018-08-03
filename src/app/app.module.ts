import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './search/search.component';
import { DataproviderService } from './data/dataprovider.service'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { KeysPipe,KeysValPipe } from './pipes/key_value.pipes';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ChartscompComponent } from './chartscomp/chartscomp.component';
import { ObservationsComponent } from './observations/observations.component';




@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SearchComponent,
    CardsComponent,
    KeysPipe,
    KeysValPipe,
    ChartscompComponent,
    ObservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [DataproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
