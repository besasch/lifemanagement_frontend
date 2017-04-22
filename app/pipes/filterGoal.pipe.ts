import { Pipe, PipeTransform } from '@angular/core';
import { Goal } from '../models/goal'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Pipe({
	name: 'filterGoals'
})
export class FilterGoals implements PipeTransform {
	transform(goals: Goal[], category?: string, lifearea?: string, timehorizont?: string): Goal[] { 
		return goals.filter((g: Goal, i: number, a: Goal[]) => {
			let categoryFilter: boolean = false;
			let lifeareaFilter: boolean = false;
			let timehorizontFilter: boolean = false;
			if(category === null || category === "Alle" ){
				categoryFilter = true;
			}else{
				if(g.category === category){
					categoryFilter = true;
				}
			}
			if(lifearea === null || lifearea === "Alle" ){
				lifeareaFilter = true;
			}else{
				if(g.lifearea === lifearea){
					lifeareaFilter = true;
				}
			}
			if(timehorizont === null || timehorizont === "Alle" ){
				timehorizontFilter = true;
			}else{
				if(g.timehorizont === timehorizont){
					timehorizontFilter = true;
				}
			}
			return categoryFilter && lifeareaFilter && timehorizontFilter;
		});
	};
}