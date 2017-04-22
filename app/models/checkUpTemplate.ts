
export class CheckUpTemplate {
  public _id: string;
  public category: string;
  public questionTemplates: Array<string>;
  public todos: Array<string>;
  public created: Date;
  constructor(){
    this._id = null;
    this.category = null;
    this.questionTemplates = null;
    this.todos = null;
    this.created = null;
  }
}