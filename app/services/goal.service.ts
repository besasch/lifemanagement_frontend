import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Goal } from '../models/goal';


@Injectable()
export class GoalService {
	private prodUrl: string = 'http://localhost:9999/goals';
	private goalsUrl: string = this.prodUrl;  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }


	getGoals(): Observable<Goal[]> {
		const url = `${this.goalsUrl}`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getNotYetReachedGoals(): Observable<Goal[]> {
		const url = `${this.goalsUrl}/status=notreached`;
		return this.http.get(url)
            .map(this.extractData) //remove .data
            .catch(this.handleError);
	}

	getGoal(id: string): Observable<Goal> {
		return this.getGoals()
				.map(goals => goals.find(goal => goal._id === id));
	};


	createGoal(goal: Goal): Observable<Goal> {
	  	const url = `${this.goalsUrl}`;
	  	return this.http
			.post(url, JSON.stringify(goal), {headers: this.headers})
			.map(this.extractData)
			.catch(this.handleError);
	};

	updateGoal(goal: Goal): Observable<Goal> {
	  	const url = `${this.goalsUrl}/${goal._id}`;
		return this.http
		    .put(url, JSON.stringify(goal), {headers: this.headers})
			.map(this.extractData)
		    .catch(this.handleError);
	};


	deleteGoal(id: string): Observable<Goal> {
	  	const url = `${this.goalsUrl}/${id}`;
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
