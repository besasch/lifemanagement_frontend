
export class Mindset {
  public _id: string;
  public oldMindset: string;
  public newMindset: string;
  public status: string;
  public created: Date;
  constructor(){
    this._id = null;
    this.oldMindset = null;
    this.newMindset = null;
    this.created = null;
    this.status = null;
  }
}