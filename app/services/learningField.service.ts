import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LearningField } from '../models/learningField';


@Injectable()
export class LearningFieldService {
	private prodUrl: string = 'http://localhost:9999/learningFields';
	private learningFieldsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }


	getLearningFields(): Observable<LearningField[]> {
		const url = `${this.learningFieldsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getLearningField(id: string): Observable<LearningField> {
		return this.getLearningFields()
				.map(learningFields => learningFields.find(learningField => learningField._id === id));
	};


	createLearningField(learningField: LearningField): Observable<LearningField> {
	  	const url = `${this.learningFieldsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(learningField), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateLearningField(learningField: LearningField): Observable<LearningField> {
	  	const url = `${this.learningFieldsUrl}/${learningField._id}`;
		return this.http
		    .put(url, JSON.stringify(learningField), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};


	deleteLearningField(id: string): Observable<void> {
	  	const url = `${this.learningFieldsUrl}/${id}`;
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
