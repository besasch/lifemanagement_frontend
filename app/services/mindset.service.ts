import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Mindset } from '../models/mindset';


@Injectable()
export class MindsetService {
	private prodUrl: string = 'http://localhost:9999/mindsets';
	private mindsetsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	


	getMindsets(): Observable<Mindset[]> { 
		const url = `${this.mindsetsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getMindset(id: string): Observable<Mindset> {
		return this.getMindsets()
				.map(mindsets => mindsets.find(mindset => mindset._id === id));
	};


	createMindset(mindset: Mindset): Observable<Mindset> {
	  	const url = `${this.mindsetsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(mindset), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateMindset(mindset: Mindset): Observable<Mindset> {
	  	const url = `${this.mindsetsUrl}/${mindset._id}`;
		return this.http
		    .put(url, JSON.stringify(mindset), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};

	
	deleteMindset(id: string): Observable<void> {
	  	const url = `${this.mindsetsUrl}/${id}`;
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