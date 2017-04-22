import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CheckUpTemplate } from '../models/checkUpTemplate';


@Injectable()
export class CheckUpTemplateService {
	private prodUrl: string = 'http://localhost:9999/checkUpTemplates';
	private checkUpTemplatesUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	


	getCheckUpTemplates(): Observable<CheckUpTemplate[]> { 
		const url = `${this.checkUpTemplatesUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getCheckUpTemplate(id: string): Observable<CheckUpTemplate> {
		return this.getCheckUpTemplates()
				.map(checkUpTemplates => checkUpTemplates.find(checkUpTemplate => checkUpTemplate._id === id));
	};


	createCheckUpTemplate(checkUpTemplate: CheckUpTemplate): Observable<CheckUpTemplate> {
	  	const url = `${this.checkUpTemplatesUrl}`;
	  	return this.http
			.post(url, JSON.stringify(checkUpTemplate), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateCheckUpTemplate(checkUpTemplate: CheckUpTemplate): Observable<CheckUpTemplate> {
	  	const url = `${this.checkUpTemplatesUrl}/${checkUpTemplate._id}`;
		return this.http
		    .put(url, JSON.stringify(checkUpTemplate), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};

	
	deleteCheckUpTemplate(id: string): Observable<void> {
	  	const url = `${this.checkUpTemplatesUrl}/${id}`;
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