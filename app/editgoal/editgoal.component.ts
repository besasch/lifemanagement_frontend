import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FeedbackMessage } from '../models/feedbackMessage';

import { Goal } from '../models/goal'
import { GoalService } from '../services/goal.service';
import 'rxjs/add/operator/switchMap';
import { LIFEAREAS, CATEGORIES, TIMEHORIZONTS } from '../const/constants';


@Component({
  moduleId: module.id,
  selector: 'editgoal',
  templateUrl: `editgoal.component.html`,
})
export class EditGoalComponent implements OnInit { 
  goal: Goal;
  feedbackMessage: FeedbackMessage = null;
  submitted: boolean = false;
  categoryOptions: string[] = CATEGORIES;
  timehorizontOptions: string[] = TIMEHORIZONTS;
  lifeareaOptions: string[] = LIFEAREAS;
  
  constructor(
  	private goalService: GoalService, 
  	private route: ActivatedRoute, 
  	private location: Location,  private titleService: Title) {
      this.titleService.setTitle('Ziel anpassen');
  } 
  ngOnInit(): void {
  	  this.route.params
      	.switchMap((params: Params) => this.goalService.getGoal(params['id']))
      	.subscribe(goal => this.goal = goal);
  }

  updateGoal(): void {
    this.submitted = true;
    this.goalService.updateGoal(this.goal)
    .subscribe(
      goal => {
        this.feedbackMessage = new FeedbackMessage("Ziel wurde geändert.", "Ziel wurde geändert.", "success");
      },
      (err) => {
        this.submitted = false;
        this.feedbackMessage = new FeedbackMessage("Das hat leider nicht funktioniert.", "Das hat leider nicht funktioniert.", "error")
      });
  }


  
  parseDate(dateString: string): Date {
    if (dateString) {
      return this.goal.due = new Date(dateString);
    } else {
        return null;
    }
  }
}
