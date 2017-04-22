import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CheckUp } from '../models/checkUp';


@Injectable()
export class CheckUpService {
	private prodUrl: string = 'http://localhost:9999/checkUps';
	private checkUpsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	


	getCheckUps(): Observable<CheckUp[]> { 
		const url = `${this.checkUpsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getCheckUp(id: string): Observable<CheckUp> {
		return this.getCheckUps()
				.map(checkUps => checkUps.find(checkUp => checkUp._id === id));
	};


	createCheckUp(checkUp: CheckUp): Observable<CheckUp> {
	  	const url = `${this.checkUpsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(checkUp), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateCheckUp(checkUp: CheckUp): Observable<CheckUp> {
	  	const url = `${this.checkUpsUrl}/${checkUp._id}`;
		return this.http
		    .put(url, JSON.stringify(checkUp), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};

	
	deleteCheckUp(id: string): Observable<void> {
	  	const url = `${this.checkUpsUrl}/${id}`;
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