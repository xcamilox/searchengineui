import { Component, OnInit } from '@angular/core';
import {Query,Catalog,Coordinates} from '../models/data.model';
import {DataproviderService} from '../data/dataprovider.service';
import{ArchiveRespond} from '../models/data.model'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


	submitted=false;
	archivesRespond:ArchiveRespond = null;
	radec ="20.48371,0.4223";
	radius=1.0
	model = new Query(this.radec,this.radius);


  constructor(private router: Router,private dataProvider:DataproviderService) { }
  ngOnInit() {}

  onSubmit():void{

  		this.router.navigate(['/result', this.model.coordinates,this.model.radius]);

		
		//this.dataProvider.getArchive(this.model.coordinates,this.model.radius).subscribe(archive => {this.archivesRespond = archive;});
		this.submitted=false;

		
		
	}
}