import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Goal } from '../models/goal';

import { GoalService } from '../services/goal.service';
import { FeedbackMessage } from '../models/feedbackMessage';
import { LIFEAREAS, CATEGORIES, TIMEHORIZONTS } from '../const/constants';

@Component({
  moduleId: module.id,
  selector: 'creategoal',
  templateUrl: `creategoal.component.html`,
  providers:[RouterLink]
})
export class CreateGoalComponent implements OnInit { 
  goal: Goal;
  feedbackMessage: FeedbackMessage = null;
  submitted: boolean = false;
  categoryOptions: string[] = CATEGORIES;
  timehorizontOptions: string[] = TIMEHORIZONTS;
  lifeareaOptions: string[] = LIFEAREAS;

  constructor(private goalService: GoalService, private titleService: Title, private router: RouterLink) {
    this.goal = new Goal();
    this.titleService.setTitle('Neues Ziel definieren');
    this.router = router;
  } // with this Angular will know to supply an instance of the GoalService when it creates a new AppComponent
  ngOnInit(): void {
  }


  createGoal(newGoal: Goal): void { 
    this.goal.created = new Date();  
    this.submitted = true;
    this.goalService.createGoal(newGoal)
    .subscribe(
      (goal) => {
        this.feedbackMessage = new FeedbackMessage("Ziel wurde angelegt.", "Ziel wurde angelegt.", "success");
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
