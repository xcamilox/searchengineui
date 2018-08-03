import 'rxjs/add/operator/switchMap';
import { Component, OnInit,Input } from '@angular/core';
import{AstroSource} from '../models/data.model'

import {Query,Catalog,Coordinates} from '../models/data.model';
import {DataproviderService} from '../data/dataprovider.service';
import{ArchiveRespond} from '../models/data.model'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {ChartscompComponent} from '../chartscomp/chartscomp.component'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

	//@Input() astrosource:AstroSource[];
	archivesRespond:ArchiveRespond = null;
	sampList:object = null;
	source:string;
	localfiles:boolean= true
	sedDataset:Object = null;
	sedPath:string=""
	positionSource:string;
	positionsDetections=[]
	id:string;
	spec:string;
	path:string = "file:///Users/cjimenez/Documents/PHD/data/tmp/"
	check:boolean = false;
	

	
	constructor(private route: ActivatedRoute,private location: Location,private router: Router,private dataProvider:DataproviderService,public _DomSanitizer: DomSanitizer) { }

	ngOnInit() {
		
		let radec=this.route.snapshot.paramMap.get('coor')
		this.source = radec
		let radius=Number(this.route.snapshot.paramMap.get('radius'))

		this.dataProvider.getArchive(radec,radius).subscribe(archive => {this.archivesRespond = archive;this.setupData()});
		this.getSampList()
	}



	setupData(){
		
		let magnitudes=[]
		let labels=[]
		let sed = this.archivesRespond.astroSource[0].sed;
		this.positionSource=this.archivesRespond.astroSource[0].pos;
		this.id = this.archivesRespond.astroSource[0].id;
		this.spec = this.archivesRespond.astroSource[0].archives[0].data["spectra"][0]["cutouts"][0]["url"];
		this.sedPath = sed["local_path"]

		let archives = this.archivesRespond.astroSource[0].archives
		if(this.archivesRespond.astroSource[0].summary["check"]){
			this.check=true;
			this.path = this.path+this.id+"/report.png";

		}
		
		let positions=[]
		for(let source in archives){
			let ra=archives[source]["data"]["summary"]["ra"]
			let dec=archives[source]["data"]["summary"]["dec"]
			
			positions.push([Math.log(ra),Math.log(dec)])
		}


		for (let item in sed["labels"]){

			let x_val=sed["wavelength"][item]
			let y_val=sed["abmagnitude"][item]
			y_val = y_val>=0?y_val:0;
			magnitudes.push({x:x_val,y:y_val})
			labels.push(sed["labels"][item])
			
		}
		
		this.positionsDetections = positions;
		this.sedDataset = {"data":magnitudes,"labels":labels}
		
	}


	getSampList(){
		this.sampList=null;
		this.dataProvider.getSampList().subscribe(samp => {this.sampList = samp;});
	}


	sendToImgSAMP(sampId){

		this.dataProvider.sampViewImage(this.source,sampId,this.localfiles).subscribe(result => {console.log("samp",result);});	
	}

	sendToCatSAMP(sampId){
		this.dataProvider.sampViewCat(this.source,sampId).subscribe(result => {console.log("samp",result);});		
	}
	

}