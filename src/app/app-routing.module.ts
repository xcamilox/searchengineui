import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {GridComponent} from "./grid/grid.component";
import {CardsComponent} from "./cards/cards.component";
import {ObservationsComponent} from "./observations/observations.component";

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'lists', component: GridComponent },
  { path: 'observations', component: ObservationsComponent },
  { path: 'result/:coor/:radius', component: CardsComponent },
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],	
	exports: [ RouterModule ]
})
export class AppRoutingModule {}