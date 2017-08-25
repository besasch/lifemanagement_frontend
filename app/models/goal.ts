import { Indicator } from './indicator';
import { StatusLogItem } from './statusLogItem';
export class Goal {
  public _id: string;
  public name: string;
  public content: string;
  public due: Date;
  public motivation: string;
  public lifearea: string;
  public category: string;
  public timehorizont: string;
  public status: string;
  public goalReachedIndicator: Indicator;
  public statusLog: Array<StatusLogItem> = new Array<StatusLogItem>();
  public subgoals: Goal[];
  public created: Date;
  constructor(){
    this._id = null;
    this.name = null;
    this.content = null;
  	this.due = null;
  	this.motivation = null;
  	this.lifearea = null;
  	this.category = null;
  	this.timehorizont = null;
  	this.subgoals = null;
    this.status = null;
  	this.created = null;
    this.goalReachedIndicator = new Indicator();
    this.statusLog = null;
  }
}
