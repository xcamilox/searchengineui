import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import{ArchiveRespond,AstroSource,sourceListSummary,Observation} from '../models/data.model'

import {ConfigApp} from '../config/app.config'


const httpOptions = {
	//'Content-Type', 'application/x-www-form-urlencoded'
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataproviderService {

	private config = new ConfigApp();
	public respond:ArchiveRespond;

  	constructor(private http: HttpClient) { }


  	getArchive(coordinate:string,radius:number):Observable<ArchiveRespond>{

  		let url = this.config.getUrl("search");
  		return this.http.post<any>(url, {
	      coordinates: coordinate,radius:radius}).pipe(
        		tap(archive => this.log(`fetched archive`)),
        		catchError(this.handleError('getArchive', []))
      	);
  	
		//this.http.post(this.config.getUrl('archives_services'),{coordinates:coordinate}).subscribe(
  		//		data => {console.log(data);}
  		//	);

  		//this.getData(this.config.getUrl('archives_services'),{coordinates:coordinate})
  		//	
  	}


  getListSource():Observable<sourceListSummary[]>{

  		let url = this.config.getUrl("sourceList");
  		return this.http.post<any>(url,{}).pipe(
        		tap(archive => this.log(`fetched archive`)),
        		catchError(this.handleError('getListSource', []))
      	);
	}

  getObservationList():Observable<Observation[]>{

      let url = this.config.getUrl("observation");
      return this.http.post<any>(url,{}).pipe(
            tap(archive => this.log(`fetched archive`)),
            catchError(this.handleError('getObservationList', []))
        );
  }

	getSampList():Observable<object>{

  		let url = this.config.getUrl("sampList");
  		return this.http.post<any>(url,{}).pipe(
        		tap(archive => this.log(`fetched archive`)),
        		catchError(this.handleError('getSamp', []))
      	);
	}

	

	sampViewImage(coordinate:string,sampId:string,localfiles:boolean):Observable<any>{

  		let url = this.config.getUrl("sendImageSamp");
  		console.log("send to,",coordinate,sampId,localfiles);
  		return this.http.post<any>(url, {
	      coordinates: coordinate,client:sampId,local:localfiles}).pipe(
        		tap(archive => this.log(`fetched archive`)),
        		catchError(this.handleError('getArchive', []))
      	);
  	
		//this.http.post(this.config.getUrl('archives_services'),{coordinates:coordinate}).subscribe(
  		//		data => {console.log(data);}
  		//	);

  		//this.getData(this.config.getUrl('archives_services'),{coordinates:coordinate})
  		//	
  	}

  	sampViewCat(coordinate:string,sampId:string):Observable<any>{

  		let url = this.config.getUrl("sendSedSamp");
  		
  		return this.http.post<any>(url, {
	      coordinates: coordinate,client:sampId}).pipe(
        		tap(archive => this.log(`fetched archive`)),
        		catchError(this.handleError('getArchive', []))
      	);
  	
  	}


  	
	/** GET archives from the server */
	getData(url:string,params:object): Observable<any> {
		console.log("get respond",url,params);
		return this.http.post<any>(url,params);
	}

	/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
	  private handleError<T> (operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {

	      // TODO: send the error to remote logging infrastructure
	      console.error(error); // log to console instead

	      // TODO: better job of transforming error for user consumption
	      this.log(`${operation} failed: ${error.message}`);

	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
	  }

	  /** Log a HeroService message with the MessageService */
	  private log(message: string) {
	    console.log(message);
	  }

}
