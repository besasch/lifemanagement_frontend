export class FeedbackMessage {
  public title: string;
  public message: string;
  public type: string;

  constructor(title: string, message: string, type: string){
    this.title = title;
    this.message = message;
    this.type = type;
  }
}