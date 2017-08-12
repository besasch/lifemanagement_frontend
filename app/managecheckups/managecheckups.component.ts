import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { CheckUp } from '../models/checkUp';
import { CheckUpTemplate } from '../models/checkUpTemplate';

import { CheckUpService } from '../services/checkUp.service';
import { CheckUpTemplateService } from '../services/checkUpTemplate.service';
import { FeedbackMessage } from '../models/feedbackMessage';

@Component({
  moduleId: module.id,
  selector: 'managecheckups',
  templateUrl: `managecheckups.component.html`,
  providers:[RouterLink]
})           
export class ManageCheckupsComponent implements OnInit { 
  feedbackMessage: FeedbackMessage = null;


  constructor(private checkUpService: CheckUpService, private checkUpTemplateService: CheckUpTemplateService, private titleService: Title, private router: RouterLink) {
    this.router = router;
  } // with this Angular will know to supply an instance of the CheckUpTemplateService when it creates a new AppComponent
  ngOnInit(): void {
    
  }

}
