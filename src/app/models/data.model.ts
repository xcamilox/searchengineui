export class Catalog{
	name:string;
	table:object;
}
export class Query{
	constructor(public coordinates:string,public radius:number){}
}

export class Coordinates{
	public ra:string;
	public dec:string;
	public radius:number;
	constructor(coordinates:string,radius:number){
		coordinates = coordinates.replace(" ","");
		var list:string[] = coordinates.split(",");
		if(list.length <=1){
			var list:string[] = coordinates.split("_");
		}
		this.ra = list[0];
		this.dec = list[1];
		this.radius = radius;

	}
	get coordinate(){
		return this.ra+" "+this.dec;
	}
}




export class Cutout{
	public url:string;
	public size:number;
	public band:string;
	public magnitude:string;
	public link:string;
}

export class FileSource{
	public url:string;
	public name:string;
	public type:string;
	public local_path:string;
	public thumbnail:string;
}




export class ImageSource{
	public name:string;
	public provider:string;
	public cutouts:Cutout[];
	public files:FileSource[]; 

}

export class SpectraSource{
	public name:string;
	public provider:string;
	public cutouts:Cutout[];
	public files:FileSource[]; 
	public cache:boolean;
	public summary:object;
}

export class dataSource{
	public catalogs:object[];
	public images:ImageSource[];
	public spectra:SpectraSource[];
	public summary:object;
	public data_request:number;
}
export class sourceListSummary{
	public id:string;
	public pos:string;
	public summary:object;
}

export class Archive{
	public archive:string;
	public status:number;
	public data:dataSource[];
	
}

export class AstroSource{
	public id:string;
	public ra:number;
	public dec:number;
	public procedureId:number;
	public archives:Archive[];
	public tag:string[];
	public summary:object;
	public sed:object;
	public pos:string;

}

export class StatusRespond{
	public code:number;
	public dateRequest:Date;
	public description:string;
}

export class ArchiveRespond{
	public status:number;
	public procedureId:string;
	public astroSource:AstroSource[];
	
}

export class Observation{
	public target:string;
	public group:string;
	public texp:number;
	public seeing:number;
	public date:string;
	public mjd:string;
}



export class simpleDescription{
	public id:string;
	public pos:string;
	public summary:Object;
	public cfht:boolean;
	public des:boolean;
	public panstarrs:boolean;
	public sdss:boolean;
	public ukidss:boolean;
	public decals:boolean;
	public spitzer:boolean;
	public wiseunwise:boolean;
	public vhs:boolean;
	public check:boolean;
	public quality:number;
	constructor(source:object){
		this.id = source["id"]
		this.pos = source["pos"]

		this.summary = source["summary"]
		this.cfht = Boolean(source["summary"]["CFHT"].det)
		this.des = Boolean(source["summary"]["DES"].det)
		this.panstarrs = Boolean(source["summary"]["PanSTARRS"].det)
		this.sdss = Boolean(source["summary"]["SDSS"].det)
		this.ukidss = Boolean(source["summary"]["Ukidss"].det)
		this.decals = Boolean(source["summary"]["decals"].det)
		this.spitzer = Boolean(source["summary"]["spitzer"].det)
		this.wiseunwise = Boolean(source["summary"]["wise_unwise"].det)
		this.vhs = Boolean(source["summary"]["vhs"].det)

		this.check = 'check' in this.summary?Boolean(this.summary["check"]) : false;
		this.quality = 'quality' in this.summary?Number(this.summary["quality"]) : 0.0;

	}


}

export class SourceDescription{
	public coordinate:string;
	public sdss_u:number;
	public sdss_g:number;
	public sdss_r:number;
	public sdss_i:number;
	public sdss_z:number;
	

	public pantstars_g:number;
	public pantstars_r:number;
	public pantstars_i:number;
	public pantstars_z:number;
	public pantstars_y:number;

	public ukidss_y:number;
	public ukidss_j:number;
	public ukidss_h:number;

	constructor(source:AstroSource){
		/*
		this.sdss_u= source.archives[0].data.summary.mag_u;
		this.sdss_g= source.archives[0].data.summary.mag_g;
		this.sdss_r= source.archives[0].data.summary.mag_r;
		this.sdss_i= source.archives[0].data.summary.mag_i;
		this.sdss_z= source.archives[0].data.summary.mag_z;
		*/
	}

}

