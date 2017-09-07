import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ToDo } from '../models/todo';
import { Question } from '../models/question';

import { CheckUp } from '../models/checkUp';
import { CheckUpTemplate } from '../models/checkUpTemplate';

import { CheckUpService } from '../services/checkUp.service';
import { CheckUpTemplateService } from '../services/checkUpTemplate.service';
import { FeedbackMessage } from '../models/feedbackMessage';

@Component({
  moduleId: module.id,
  selector: 'docheckup',
  templateUrl: `docheckup.component.html`,
  providers:[RouterLink]
})
export class DoCheckupComponent implements OnInit {
  feedbackMessage: FeedbackMessage = null;
  checkUp: CheckUp = new CheckUp();
  checkUpTemplate: CheckUpTemplate = new CheckUpTemplate();
  category = "weekly";

  constructor(private checkUpService: CheckUpService, private checkUpTemplateService: CheckUpTemplateService, private titleService: Title, private router: RouterLink, private route: ActivatedRoute) {
    this.titleService.setTitle('Check Up!');
    this.router = router;
  } // with this Angular will know to supply an instance of the CheckUpTemplateService when it creates a new AppComponent
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.category = params['category'];
       this.checkUpTemplateService.getCheckUpTemplates().subscribe((checkUpTemplates: CheckUpTemplate[])=>{
         this.checkUpTemplate = checkUpTemplates.filter((cut:CheckUpTemplate)=>{
           return cut.category === this.category;
         })[0];
         this.checkUp = this.createCheckUpWithCheckUpTemplate(this.checkUpTemplate);
       });
    });
  }


  createCheckUpWithCheckUpTemplate(checkUpTemplate: CheckUpTemplate): CheckUp {
    let checkUp: CheckUp = new CheckUp();
    checkUp.todos = [];
    checkUp.questions = [];
    checkUp.created = new Date();
    checkUp.category = checkUpTemplate.category;

    for(let i=0; i<checkUpTemplate.todos.length; i++){
      checkUp.todos.push(new ToDo(checkUpTemplate.todos[i], false));
    }
    for(let i=0; i<checkUpTemplate.questionTemplates.length; i++){
      checkUp.questions.push(new Question(checkUpTemplate.questionTemplates[i]));
    }
    return checkUp;
  }

  createCheckUp(newCheckUp: CheckUp): void {
    this.checkUpService.createCheckUp(newCheckUp)
    .subscribe(
      (newCheckUp) => {
        this.feedbackMessage = new FeedbackMessage("CheckUp wurde erstellt.", "CheckUp wurde erstellt.", "success");
      },
      (err) => {
        this.feedbackMessage = new FeedbackMessage("Das hat leider nicht funktioniert.", "Das hat leider nicht funktioniert.", "error")
      });
  }

}
