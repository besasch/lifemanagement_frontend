import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Mindset } from '../models/mindset';
import { FeedbackMessage } from '../models/feedbackMessage';

import { MindsetService } from '../services/mindset.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'managemindsets',
  templateUrl: `managemindsets.component.html`,
})
export class ManageMindsetsComponent implements OnInit, OnDestroy { 
 
  constructor(private mindsetService: MindsetService, private titleService: Title) {
        this.titleService.setTitle('Glaubenssätze');
  } 

  getMindsetsSubscription: Subscription;
  mindsets: Mindset[];
  creationMode: boolean = false;
  editIndex: number = -1;
  newMindset: Mindset = new Mindset();
  feedbackMessage: FeedbackMessage = null;


  ngOnInit(): void {
    this.getMindsetsSubscription = this.mindsetService.getMindsets().subscribe((mindsets: Mindset[]) => 
      {  
        this.mindsets = Object.create(mindsets);

      });
  }
  

  ngOnDestroy(): void {
    this.getMindsetsSubscription.unsubscribe();
  }
  

  createMindset(): void{
    this.newMindset.created = new Date();
    this.mindsetService.createMindset(this.newMindset)
          .subscribe(
            (mindset: Mindset) => {
              this.newMindset._id = mindset._id;
              this.mindsets.push(this.newMindset);
              this.mindsets = Object.create(this.mindsets);
              this.newMindset = new Mindset();
              this.feedbackMessage = new FeedbackMessage("Titel", "Neuen Glaubenssatz angelegt", "success");
          },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Glaubenssatz konnte nicht angelegt werden.", "Glaubenssatz konnte nicht angelegt werden.", "error");
            });
  }
  
  updateMindset(mindset: Mindset): void{
    this.mindsetService.updateMindset(mindset)
          .subscribe(
            (updatedMindset: Mindset)  => {
              this.feedbackMessage = new FeedbackMessage("Glaubenssatz wurde aktualisiert", "Glaubenssatz wurde aktualisiert", "success");
            },
            (err:Error)  => {
              this.feedbackMessage = new FeedbackMessage("Der Glaubenssatz konnte leider nicht aktualisiert werden.", "Der Glaubenssatz konnte leider nicht aktualisiert werden.", "error");
            });
  }
  

  deleteMindset(mindset: Mindset): void{
    this.mindsetService.deleteMindset(mindset._id)
          .subscribe(
            () => {
              let i = this.mindsets.findIndex(e => e._id === mindset._id);
              this.mindsets.splice(i,1);
              this.feedbackMessage = new FeedbackMessage("Glaubenssatz aktualisiert", "Der Glaubenssatz wurde erfolgreich aktualisiert.", "success");
            },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Glaubenssatz konnte nicht aktualisiert werden", "Der Glaubenssatz konnte nicht aktualisiert werden.", "error");
          });
  }
  

  
}
