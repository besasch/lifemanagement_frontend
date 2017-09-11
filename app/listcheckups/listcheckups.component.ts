import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { CheckUp } from '../models/checkUp';
import { Event } from '../models/event';
import { Title } from '@angular/platform-browser';
import { FeedbackMessage } from '../models/feedbackMessage';
import { CheckUpService } from '../services/checkUp.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import { RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'listcheckups',
  templateUrl: 'listcheckups.component.html',
})
export class ListCheckUpsComponent implements OnInit, OnDestroy {
  getCheckUpsSubscription: Subscription;
  checkUps: CheckUp[];
  feedbackMessage: FeedbackMessage;
  category = "weekly";


  constructor(private checkUpService: CheckUpService, private cdr: ChangeDetectorRef, private router: RouterLink, private route: ActivatedRoute) {
  } // with this Angular will know to supply an instance of the CheckUpService when it creates a new AppComponent

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.getCheckUpsSubscription = this.checkUpService.getCheckUps()
        .subscribe(
          (checkUps) => {
            this.checkUps = checkUps.filter((cut:CheckUp)=>{
              return cut.category === this.category;
            })
          },
          (err) => {
            this.feedbackMessage = new FeedbackMessage("CheckUps konnten nicht geladen werden.", "Leider ist der Server aktuell nicht erreichbar. Deswegen werden keine CheckUps angezeigt.", "error");
          });
      });
  }

  ngOnDestroy(): void {
    this.getCheckUpsSubscription.unsubscribe();
  }

}
