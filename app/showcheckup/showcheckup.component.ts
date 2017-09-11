import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { ToDo } from '../models/todo';
import { Question } from '../models/question';

import { CheckUp } from '../models/checkUp';
import { CheckUpTemplate } from '../models/checkUpTemplate';

import { CheckUpService } from '../services/checkUp.service';
import { FeedbackMessage } from '../models/feedbackMessage';

@Component({
  moduleId: module.id,
  selector: 'showcheckup',
  templateUrl: `showcheckup.component.html`,
  providers:[RouterLink]
})
export class ShowCheckupComponent implements OnInit {
  feedbackMessage: FeedbackMessage = null;
  checkUp: CheckUp = new CheckUp();
  checkUpTemplate: CheckUpTemplate = new CheckUpTemplate();

  constructor(private checkUpService: CheckUpService, private titleService: Title, private router: RouterLink, private route: ActivatedRoute) {
    this.titleService.setTitle('Check Up!');
    this.router = router;
  } // with this Angular will know to supply an instance of the CheckUpTemplateService when it creates a new AppComponent
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       let checkUpId = params['id'];
       this.checkUpService.getCheckUp(checkUpId).subscribe((checkUp: CheckUp)=>{
         this.checkUp = checkUp;
       });
    });
  }




  createCheckUp(newCheckUp: CheckUp): void {
    this.checkUpService.updateCheckUp(newCheckUp)
    .subscribe(
      (newCheckUp) => {
        this.feedbackMessage = new FeedbackMessage("CheckUp wurde erstellt.", "CheckUp wurde erstellt.", "success");
      },
      (err) => {
        this.feedbackMessage = new FeedbackMessage("Das hat leider nicht funktioniert.", "Das hat leider nicht funktioniert.", "error")
      });
  }

}
