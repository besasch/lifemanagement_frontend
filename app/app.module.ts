/*

IDEAS:

- Zeithorizont, might be calculated some time in the future
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './services/app-routing.module';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav/nav.component';
import { MainComponent }  from './main/main.component';

import { VisionComponent }  from './vision/vision.component';
import { ListGoalsComponent }  from './listgoals/listgoals.component';
import { EditGoalComponent }  from './editgoal/editgoal.component';
import { CreateGoalComponent }  from './creategoal/creategoal.component';
import { ManageHabbitsComponent }  from './managehabbits/managehabbits.component';
import { ManageWishsComponent }  from './managewishs/managewishs.component';
import { ManageLearningFieldsComponent } from './managelearningfields/managelearningfields.component';
import { ManageMindsetsComponent }  from './managemindsets/managemindsets.component';
import { EditCheckupQuestionsComponent }  from './editcheckupquestions/editcheckupquestions.component';
import { FrameworkComponent }  from './framework/framework.component';
import { TimeLineComponent } from './timeline/timeline.component';
import { LifetimeComponent } from './comp/lifetime.component';
import { DoCheckupComponent } from './docheckup/docheckup.component';
import { ListCheckUpsComponent } from './listcheckups/listcheckups.component';
import { ManageCheckupsComponent } from './managecheckups/managecheckups.component';
import { ShowCheckupComponent } from './showcheckup/showcheckup.component';
import { PopUpMessageComponent } from './comp/popupmessage.component';

import { VisionService } from './services/vision.service';
import { GoalService } from './services/goal.service';
import { HabbitService } from './services/habbit.service';
import { MindsetService } from './services/mindset.service';
import { CheckUpTemplateService } from './services/checkUpTemplate.service';
import { CheckUpService } from './services/checkUp.service';
import { LearningFieldService } from './services/learningField.service';
import { WishService } from './services/wish.service';

import { FilterGoals } from './pipes/filterGoal.pipe';
import { FilterHabbits } from './pipes/filterHabbit.pipe';



@NgModule({
  imports:      [
  	BrowserModule,
  	AppRoutingModule,
    HttpModule,
	  FormsModule
  ],
  declarations: [
  	AppComponent,
  	NavComponent,
  	MainComponent,
  	VisionComponent,
    PopUpMessageComponent,
    ListGoalsComponent,
    EditGoalComponent,
    CreateGoalComponent,
    ManageHabbitsComponent,
    ManageWishsComponent,
    ManageLearningFieldsComponent,
    ManageMindsetsComponent,
    ListCheckUpsComponent,
    ShowCheckupComponent,
    EditCheckupQuestionsComponent,
    FrameworkComponent,
    FilterGoals,
    FilterHabbits,
    TimeLineComponent,
    LifetimeComponent,
    DoCheckupComponent,
    ManageCheckupsComponent
  ],
  bootstrap: [
  	AppComponent
  ],
  providers: [
  	VisionService,
    GoalService,
    HabbitService,
    MindsetService,
    CheckUpTemplateService,
    CheckUpService,
    LearningFieldService,
    WishService
  ]
})
export class AppModule {
}
