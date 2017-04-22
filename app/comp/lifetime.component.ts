import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lifetime',
  templateUrl: `lifetime.component.html`,
  styles: [`
  .lifetime {
    width: 100%;
    height: 50px;
  }
  .ahead {
    height: 100%;
  }
  .passed {
    height: 100%;
    border-right: 3px solid black;
    background-color: #337ab7;
  }
  `]
})
export class LifetimeComponent implements OnInit, OnChanges { 
  birthday: Date = new Date(1987,11,25,0,0,0);
  today: Date = new Date();
  deathday: Date = new Date(2067,11,25,0,0,0);
  baseLength: number = 0;
  show: boolean = true;

  constructor() {} 

  ngOnInit(): void {
    this.calculateBaseLength()
  }
  ngOnChanges(): void {
    this.calculateBaseLength()
  }

  calculateBaseLength():void {
    this.baseLength = (this.deathday.getTime() - this.birthday.getTime()) * 1.05
  }

  calculateWidth(): number{
     return ((this.today.getTime() - this.birthday.getTime())/this.baseLength) * 100;
  } 
}
