import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { CheckUpTemplate } from '../models/checkUpTemplate';

import { CheckUpTemplateService } from '../services/checkUpTemplate.service';
import { FeedbackMessage } from '../models/feedbackMessage';

@Component({
  moduleId: module.id,
  selector: 'editcheckupquestions',
  templateUrl: `editcheckupquestions.component.html`,
  providers:[RouterLink]
})
export class EditCheckupQuestionsComponent implements OnInit {
  feedbackMessage: FeedbackMessage = null;
  dailyCheckUpTemplate: CheckUpTemplate = new CheckUpTemplate();
  weeklyCheckUpTemplate: CheckUpTemplate = new CheckUpTemplate();
  monthlyCheckUpTemplate: CheckUpTemplate = new CheckUpTemplate();
  quarterlyCheckUpTemplate: CheckUpTemplate = new CheckUpTemplate();
  yearlyCheckUpTemplate: CheckUpTemplate = new CheckUpTemplate();

  constructor(private checkUpTemplateService: CheckUpTemplateService, private titleService: Title, private router: RouterLink) {
    this.titleService.setTitle('CheckUp Questions bearbeiten');
    this.router = router;
    this.setUpData();
    this.checkUpTemplateService.getCheckUpTemplates().subscribe((checkUpTemplates: CheckUpTemplate[])=>{
      for(let i = 0; i < checkUpTemplates.length; i++){
        switch(checkUpTemplates[i].category){
          case 'daily': this.dailyCheckUpTemplate = checkUpTemplates[i]; break;
          case 'weekly': this.weeklyCheckUpTemplate = checkUpTemplates[i]; break;
          case 'monthly': this.monthlyCheckUpTemplate = checkUpTemplates[i]; break;
          case 'quarterly': this.quarterlyCheckUpTemplate = checkUpTemplates[i]; break;
          case 'yearly': this.yearlyCheckUpTemplate = checkUpTemplates[i]; break;
        }
      }
    });
  } // with this Angular will know to supply an instance of the CheckUpTemplateService when it creates a new AppComponent
  ngOnInit(): void {
  }

  setUpData(): void {
    this.dailyCheckUpTemplate.questionTemplates = new Array<string>();
    this.dailyCheckUpTemplate.category = "daily";
    this.dailyCheckUpTemplate.created = new Date();
    this.dailyCheckUpTemplate.todos = new Array<string>();

    this.weeklyCheckUpTemplate.questionTemplates = new Array<string>();
    this.weeklyCheckUpTemplate.category = "weekly";
    this.weeklyCheckUpTemplate.created = new Date();
    this.weeklyCheckUpTemplate.todos = new Array<string>();

    this.monthlyCheckUpTemplate.questionTemplates = new Array<string>();
    this.monthlyCheckUpTemplate.category = "monthly";
    this.monthlyCheckUpTemplate.created = new Date();
    this.monthlyCheckUpTemplate.todos = new Array<string>();

    this.quarterlyCheckUpTemplate.questionTemplates = new Array<string>();
    this.quarterlyCheckUpTemplate.category = "quarterly";
    this.quarterlyCheckUpTemplate.created = new Date();
    this.quarterlyCheckUpTemplate.todos = new Array<string>();

    this.yearlyCheckUpTemplate.questionTemplates = new Array<string>();
    this.yearlyCheckUpTemplate.category = "yearly";
    this.yearlyCheckUpTemplate.created = new Date();
    this.yearlyCheckUpTemplate.todos = new Array<string>();
  }

  createCheckUpQuestionTemplate(newCheckUpTemplate: CheckUpTemplate): void {
    this.checkUpTemplateService.createCheckUpTemplate(newCheckUpTemplate)
    .subscribe(
      (newCheckUpTemplate) => {
        this.feedbackMessage = new FeedbackMessage("CheckUp Fragen wurden angepasst.", "CheckUp Fragen wurden angepasst.", "success");
      },
      (err) => {
        this.feedbackMessage = new FeedbackMessage("Das hat leider nicht funktioniert.", "Das hat leider nicht funktioniert.", "error")
      });
  }

}
