import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { Goal } from '../models/goal';
import { Event } from '../models/event';
import { Title } from '@angular/platform-browser';
import { FeedbackMessage } from '../models/feedbackMessage';
import { GoalService } from '../services/goal.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import { LIFEAREAS, CATEGORIES, TIMEHORIZONTS } from '../const/constants';



@Component({
  moduleId: module.id,
  selector: 'listgoals',
  templateUrl: 'listgoals.component.html',
})
export class ListCheckUpsComponent implements OnInit, OnDestroy { 
  getGoalsSubscription: Subscription;
  goals: Goal[];
  feedbackMessage: FeedbackMessage;
  orderToBePrinted: Goal;
  categoryFilter: string = "Alle";
  lifeareaFilter: string = "Alle";
  timehorizontFilter: string = "Alle";
  categoryFilterOptions: string[] = CATEGORIES;
  timehorizontFilterOptions: string[] = TIMEHORIZONTS;
  lifeareaFilterOptions: string[] = LIFEAREAS;

  constructor(private goalService: GoalService, private cdr: ChangeDetectorRef, private titleService: Title) {
    this.cdr = cdr;
    this.titleService.setTitle('Checkups');
  } // with this Angular will know to supply an instance of the GoalService when it creates a new AppComponent
  
  ngOnInit(): void {
    this.getGoalsSubscription = this.goalService.getGoals()
    .subscribe(
      (goals) => { 
        this.goals = goals;
      },
      (err) => {
        this.feedbackMessage = new FeedbackMessage("Ziele konnten nicht geladen werden.", "Leider ist der Server aktuell nicht erreichbar. Deswegen werden keine Ziele angezeigt.", "error");
      });  
  }

  ngOnDestroy(): void {
    this.getGoalsSubscription.unsubscribe();
  }


  deleteGoal(goal: Goal): void {
    this.goalService
    .deleteGoal(goal._id)
    .subscribe(
      () => {
        let i = this.goals.findIndex(e => e._id === goal._id);
        this.goals.splice(i,1)
        this.goals = Object.create(this.goals);
        this.feedbackMessage = new FeedbackMessage("Ziel wurde gelöscht.", "Ziel wurde gelöscht.", "success");
      },
      err => {
        this.feedbackMessage = new FeedbackMessage("Ziel konnte nicht gelöscht werden.", "Ziele konnte leider nicht gelöscht werden. Schließen Sie die Anwendung und starten Sie diese erneut.", "error");
      });
  }

  convertToEvents(goals: Goal[]): Event[] {
    let events: Event[] = [];
    goals.forEach((g: Goal, i:number, gs: Goal[]) => {
      let event: Event = new Event();
      event.title = g.name;
      event.date = new Date(g.due);
      events.push(event);
    });
    return events;
  }
}
