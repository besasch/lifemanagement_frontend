import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { Vision } from '../models/vision';
import { FeedbackMessage } from '../models/feedbackMessage';
import { VisionService } from '../services/vision.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'vision',
  templateUrl: 'vision.component.html',
  styles: [`
    .vision {
      font-size: 20px;
      border: 0;
      font-family: "Avenir", Arial, sans-serif;
    }
  `]
})
export class VisionComponent implements OnInit, OnDestroy {
  currentVision: Vision;
  getVisionsSubscription: Subscription;
  feedbackMessage: FeedbackMessage = null;
  showSubmit: boolean = false;

  constructor(private visionService: VisionService, private cdr: ChangeDetectorRef, private titleService: Title) {
    this.titleService.setTitle('Vision');
    this.currentVision = new Vision();
  } // with this Angular will know to supply an instance of the PowderService when it creates a new AppComponent

  ngOnInit(): void {
   this.getVisionsSubscription = this.visionService.getVisions().subscribe((visions: Vision[])=>{
     let length = visions.length;
     if(!(length <= 0)){
      this.currentVision = visions[length-1];
     }
   })
  }

  ngOnDestroy(): void {
  }

  updateVision(): void {
    this.currentVision.date = new Date();
    this.visionService.createVision(this.currentVision).subscribe(
      (createdVision: Vision) => { this.feedbackMessage = new FeedbackMessage("","Vision gespeichert","success")},
      (err)=> {this.feedbackMessage = new FeedbackMessage("","Vision konnte nicht gespeichert werden","error")});
  }

}
