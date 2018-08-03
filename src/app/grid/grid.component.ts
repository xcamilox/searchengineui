import { Component, OnInit,ViewChild } from '@angular/core';
import {DataproviderService} from '../data/dataprovider.service';
import{AstroSource,simpleDescription,sourceListSummary,Query} from '../models/data.model'

import {MatPaginator, MatInputModule,MatSort, MatTableDataSource} from '@angular/material';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	listSource:sourceListSummary[] = null;
	displayedColumns = ['id','quality','check', 'SDSS', 'CFHT', 'Decals', 'Des','PanSTARRS','Ukidss','VHS','Spitzer','WiseUnwise'];
	rowSources:simpleDescription[]=null
  	dataSource: MatTableDataSource<sourceListSummary>;
  	tempSource:simpleDescription[]=[];

  	@ViewChild(MatPaginator) paginator: MatPaginator;
  	@ViewChild(MatSort) sort: MatSort;

	constructor(private router: Router,private dataProvider:DataproviderService) { 
	  	this.dataSource = new MatTableDataSource();
	}

	ngOnInit() {
	  	
	  	this.dataProvider.getListSource().subscribe(archive => { this.listSource = archive;this.filterData();});

	}

	filterData(){
		
		for(let row of this.listSource){
			let source = new simpleDescription(row);
			this.tempSource.push(source);

		}
		this.rowSources=this.tempSource;
		this.dataSource.data = this.rowSources;
		
	}

	/**
	* Set the paginator and sort after the view init since this component will
	* be able to query its view for the initialized paginator and sort.
	*/
	ngAfterViewInit() {
	    this.dataSource.paginator = this.paginator;
	    this.dataSource.sort = this.sort;
	}

	applyFilter(filterValue: string) {
	    filterValue = filterValue.trim(); // Remove whitespace
	    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
	    this.dataSource.filter = filterValue;
	}

	viewDetail(radec:string){
		radec=radec.replace("_",",")
		let model = new Query(radec,1);
		this.router.navigate(['/result', model.coordinates,model.radius]);
	}

}
