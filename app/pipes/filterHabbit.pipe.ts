import { Pipe, PipeTransform } from '@angular/core';
import { Habbit } from '../models/habbit'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Pipe({
	name: 'filterHabbits'
})
export class FilterHabbits implements PipeTransform {
	transform(Habbits: Habbit[], status?: string): Habbit[] {
		return Habbits.filter((h: Habbit, i: number, a: Habbit[]) => {
			let statusFilter: boolean = false;
			if(status === null || status === "Alle" ){
				statusFilter = true;
			}else{
				if(h.status === status){
					statusFilter = true;
				}
			}
			return statusFilter;
		});
	};
}
