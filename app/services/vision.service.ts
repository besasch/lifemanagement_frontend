import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Vision } from '../models/vision';


@Injectable()
export class VisionService {
	private prodUrl: string = 'http://localhost:9999/visions';
	private visionsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }


	getVisions(): Observable<Vision[]> { 
		const url = `${this.visionsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getVision(id: string): Observable<Vision> {
		return this.getVisions()
				.map(visions => visions.find(vision => vision._id === id));
	};


	createVision(vision: Vision): Observable<Vision> {
	  	const url = `${this.visionsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(vision), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateVision(vision: Vision): Observable<Vision> {
	  	const url = `${this.visionsUrl}/${vision._id}`;
		return this.http
		    .put(url, JSON.stringify(vision), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};

	
	deleteVision(id: string): Observable<void> {
	  	const url = `${this.visionsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);

	};

	private extractData(res: Response){
		let body = res.json();
		return body || {};
	}
	private handleError (error: Response | any) {
	    let errMsg: string;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify(body);
	      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
  }


}