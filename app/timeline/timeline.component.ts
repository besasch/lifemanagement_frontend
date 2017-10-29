import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Event } from '../models/event';

@Component({
  moduleId: module.id,
  selector: 'timeline',
  templateUrl: `timeline.component.html`,
  styles: [`
  .timeline {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  .event-title {
    font-size: smaller;
  }
  .event-icon {
    font-size: larger;
  }
  `]
})
export class TimeLineComponent implements OnInit, OnChanges {

  @Input() events: Event[] = null;
  today: Date = new Date();
  baseLength: number = 0;

  constructor() {}



  ngOnInit(): void {
    if(this.events != null){
      this.baseLength = (this.getLastEvent().getTime() - this.today.getTime()) * 1.05
    }
  }
  ngOnChanges(changes: any): void {
    if(this.events != null){
      this.baseLength = (this.getLastEvent().getTime() - this.today.getTime()) * 1.05
    }
  }


  getLastEvent(): Date {
    let latestEvent: Date = new Date();
    this.events.forEach((e:Event, i:number, es:Event[]) => {
      if(latestEvent.getTime() < e.date.getTime()){
        latestEvent = e.date;
      }
    })
    return latestEvent;
  }

   calculateMarginLeft(event:Event): number{

     return ((event.date.getTime() - this.today.getTime())/this.baseLength) * 100;
   }
}
