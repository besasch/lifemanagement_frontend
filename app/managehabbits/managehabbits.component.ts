import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Habbit } from '../models/habbit';
import { FeedbackMessage } from '../models/feedbackMessage';

import { HabbitService } from '../services/habbit.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'managehabbits',
  templateUrl: `managehabbits.component.html`,
})
export class ManageHabbitsComponent implements OnInit, OnDestroy { 
 
  constructor(private habbitService: HabbitService, private titleService: Title) {
        this.titleService.setTitle('Gewohnheiten');
  } 

  getHabbitsSubscription: Subscription;
  habbits: Habbit[];
  creationMode: boolean = false;
  editIndex: number = -1;
  newHabbit: Habbit = new Habbit();
  feedbackMessage: FeedbackMessage = null;


  ngOnInit(): void {
    this.getHabbitsSubscription = this.habbitService.getHabbits().subscribe((habbits: Habbit[]) => 
      {  
        this.habbits = Object.create(habbits);

      });
  }
  

  ngOnDestroy(): void {
    this.getHabbitsSubscription.unsubscribe();
  }
  

  createHabbit(): void{
    this.newHabbit.created = new Date();
    this.habbitService.createHabbit(this.newHabbit)
          .subscribe(
            (habbit: Habbit) => {
              this.newHabbit._id = habbit._id;
              this.habbits.push(this.newHabbit);
              this.habbits = Object.create(this.habbits);
              this.newHabbit = new Habbit();
              this.feedbackMessage = new FeedbackMessage("Titel", "Neuer Gewohnheit angelegt", "success");
          },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Gewohnheit konnte nicht angelegt werden.", "Gewohnheit konnte nicht angelegt werden.", "error");
            });
  }
  
  updateHabbit(habbit: Habbit): void{
    this.habbitService.updateHabbit(habbit)
          .subscribe(
            (updatedHabbit: Habbit)  => {
              this.feedbackMessage = new FeedbackMessage("Gewohnheit wurde aktualisiert", "Gewohnheit wurde aktualisiert", "success");
            },
            (err:Error)  => {
              this.feedbackMessage = new FeedbackMessage("Gewohnheit konnte leider nicht aktualisiert werden.", "Gewohnheit konnte leider nicht aktualisiert werden.", "error");
            });
  }
  

  deleteHabbit(habbit: Habbit): void{
    this.habbitService.deleteHabbit(habbit._id)
          .subscribe(
            () => {
              let i = this.habbits.findIndex(e => e._id === habbit._id);
              this.habbits.splice(i,1);
              this.feedbackMessage = new FeedbackMessage("Gewohnheit aktualisiert", "Gewohnheit wurde erfolgreich aktualisiert.", "success");
            },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Gewohnheit konnte nicht aktualisiert werden", "Gewohnheit konnte nicht aktualisiert werden.", "error");
          });
  }
  

  
}
