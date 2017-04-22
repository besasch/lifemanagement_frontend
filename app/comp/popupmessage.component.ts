import { Component, Input, trigger, state, style, transition, animate, OnChanges, keyframes } from '@angular/core';
import { FeedbackMessage } from './../models/feedbackMessage';

@Component({
  moduleId: module.id,
  selector: 'popupMessage',
  templateUrl: 'popupMessage.component.html',
  animations: [
    trigger('triggerMessage', 
    	[
		   transition('void => *', [
		      animate(1000, keyframes([
		        style({opacity: 0}),
		        style({opacity: 0.5}),
		        style({opacity: 1})
		      ]))
		    ]),
		    transition('* => void', [
		      animate(1000, keyframes([
		        style({opacity: 1}),
		        style({opacity: 0.5}),
		        style({opacity: 0})
		      ]))
		    ])
		  ])
		]
})
export class PopUpMessageComponent implements OnChanges {
  _feedbackMessage: FeedbackMessage = null;

  ngOnChanges(changes: any){ }

  @Input()
  set feedbackMessage(feedbackMessage: FeedbackMessage) {
    this._feedbackMessage = feedbackMessage;
  	setTimeout(()=>{
         this._feedbackMessage= null;  
      },3000);
  }

  get feedbackMessage(): FeedbackMessage { return this._feedbackMessage; }


  calculateColor(): string{
  	if(this._feedbackMessage){
	  	if(this._feedbackMessage.type === "success"){
	  		return "rgb(223, 240, 216)";	
	  	}else if(this._feedbackMessage.type === "info"){
	  		return "rgb(205, 218, 240)";
	  	}else {
	  		return "rgb(242, 222, 222)";
	  	}
	}
  }
}