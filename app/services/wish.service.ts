import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Wish } from '../models/wish';


@Injectable()
export class WishService {
	private prodUrl: string = 'http://localhost:9999/wishs';
	private wishsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }


	getWishs(): Observable<Wish[]> {
		const url = `${this.wishsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getWish(id: string): Observable<Wish> {
		return this.getWishs()
				.map(wishs => wishs.find(wish => wish._id === id));
	};


	createWish(wish: Wish): Observable<Wish> {
	  	const url = `${this.wishsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(wish), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateWish(wish: Wish): Observable<Wish> {
	  	const url = `${this.wishsUrl}/${wish._id}`;
		return this.http
		    .put(url, JSON.stringify(wish), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};


	deleteWish(id: string): Observable<void> {
	  	const url = `${this.wishsUrl}/${id}`;
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
