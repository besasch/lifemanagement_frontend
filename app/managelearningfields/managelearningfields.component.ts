import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LearningField } from '../models/learningField';
import { FeedbackMessage } from '../models/feedbackMessage';

import { LearningFieldService } from '../services/learningField.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'managelearningfields',
  templateUrl: `managelearningfields.component.html`,
})
export class ManageLearningFieldsComponent implements OnInit, OnDestroy {

  constructor(private learningFieldService: LearningFieldService, private titleService: Title) {
        this.titleService.setTitle('Lernfeld');
  }

  getLearningFieldsSubscription: Subscription;
  learningFields: LearningField[];
  creationMode: boolean = false;
  editIndex: number = -1;
  newLearningField: LearningField = new LearningField();
  feedbackMessage: FeedbackMessage = null;


  ngOnInit(): void {
    this.getLearningFieldsSubscription = this.learningFieldService.getLearningFields().subscribe((learningFields: LearningField[]) =>
      {
        this.learningFields = Object.create(learningFields);

      });
  }


  ngOnDestroy(): void {
    this.getLearningFieldsSubscription.unsubscribe();
  }


  createLearningField(): void{
    this.newLearningField.created = new Date();
    this.learningFieldService.createLearningField(this.newLearningField)
          .subscribe(
            (learningField: LearningField) => {
              this.newLearningField._id = learningField._id;
              this.learningFields.push(this.newLearningField);
              this.learningFields = Object.create(this.learningFields);
              this.newLearningField = new LearningField();
              this.feedbackMessage = new FeedbackMessage("Titel", "Neuer Lernfeld angelegt", "success");
          },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Lernfeld konnte nicht angelegt werden.", "Lernfeld konnte nicht angelegt werden.", "error");
            });
  }

  updateLearningField(learningField: LearningField): void{
    this.learningFieldService.updateLearningField(learningField)
          .subscribe(
            (updatedLearningField: LearningField)  => {
              this.feedbackMessage = new FeedbackMessage("Lernfeld wurde aktualisiert", "Lernfeld wurde aktualisiert", "success");
            },
            (err:Error)  => {
              this.feedbackMessage = new FeedbackMessage("Lernfeld konnte leider nicht aktualisiert werden.", "Lernfeld konnte leider nicht aktualisiert werden.", "error");
            });
  }


  deleteLearningField(learningField: LearningField): void{
    this.learningFieldService.deleteLearningField(learningField._id)
          .subscribe(
            () => {
              let i = this.learningFields.findIndex(e => e._id === learningField._id);
              this.learningFields.splice(i,1);
              this.feedbackMessage = new FeedbackMessage("Lernfeld aktualisiert", "Lernfeld wurde erfolgreich aktualisiert.", "success");
            },
            (err:Error) => {
              this.feedbackMessage = new FeedbackMessage("Lernfeld konnte nicht aktualisiert werden", "Lernfeld konnte nicht aktualisiert werden.", "error");
          });
  }



}
