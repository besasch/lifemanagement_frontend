
export class Goal {
  public _id: string;
  public name: string;
  public content: string;
  public due: Date;
  public motivation: string;
  public lifearea: string;
  public category: string;
  public timehorizont: string;
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
  	this.created = null;
  }
}