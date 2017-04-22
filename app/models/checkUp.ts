import { Question } from './question';
import { ToDo } from './toDo';


export class CheckUp {
  public _id: string;
  public category: string;
  public questionTemplates: Array<Question>;
  public todos: Array<ToDo>;
  public created: Date;
  constructor(){
    this._id = null;
    this.category = null;
    this.questionTemplates = null;
    this.todos = null;
    this.created = null;
  }
}