import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Habbit } from '../models/habbit';


@Injectable()
export class HabbitService {
	private prodUrl: string = 'http://localhost:9999/habbits';
	private habbitsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	


	getHabbits(): Observable<Habbit[]> { 
		const url = `${this.habbitsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getHabbit(id: string): Observable<Habbit> {
		return this.getHabbits()
				.map(habbits => habbits.find(habbit => habbit._id === id));
	};


	createHabbit(habbit: Habbit): Observable<Habbit> {
	  	const url = `${this.habbitsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(habbit), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateHabbit(habbit: Habbit): Observable<Habbit> {
	  	const url = `${this.habbitsUrl}/${habbit._id}`;
		return this.http
		    .put(url, JSON.stringify(habbit), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};

	
	deleteHabbit(id: string): Observable<void> {
	  	const url = `${this.habbitsUrl}/${id}`;
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