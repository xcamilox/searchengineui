import { Component, OnInit,ViewChild } from '@angular/core';
import {DataproviderService} from '../data/dataprovider.service';
import{Observation} from '../models/data.model'

import {MatPaginator, MatInputModule,MatSort, MatTableDataSource} from '@angular/material';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {

	observations:Observation[] = null;
	dataSource: MatTableDataSource<Observation>;
	displayedColumns = ['target','group','texp','seeing','date','mjd'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
  	@ViewChild(MatSort) sort: MatSort;

	constructor(private router: Router,private dataProvider:DataproviderService) { 
	  	this.dataSource = new MatTableDataSource();
	}

	ngOnInit() {
	  	
	  	this.dataProvider.getObservationList().subscribe(archive => { this.observations = archive;this.filterData();});

	}

	filterData(){
		this.dataSource.data = this.observations;
		console.log(this.dataSource.data)
	}

}


