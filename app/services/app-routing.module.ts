import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

//Vision
import { VisionComponent }   from '../vision/vision.component';

//Goal
import { ListGoalsComponent }  from '../listgoals/listgoals.component';
import { EditGoalComponent }  from '../editgoal/editgoal.component';
import { CreateGoalComponent }  from '../creategoal/creategoal.component';
import { ManageHabbitsComponent }  from '../managehabbits/managehabbits.component';
import { ManageMindsetsComponent }  from '../managemindsets/managemindsets.component';
import { ManageWishsComponent }  from '../managewishs/managewishs.component';
import { ManageLearningFieldsComponent } from '../managelearningfields/managelearningfields.component';
import { FrameworkComponent }  from '../framework/framework.component';


//Checkups
import { EditCheckupQuestionsComponent }  from '../editcheckupquestions/editcheckupquestions.component';
import { ManageCheckupsComponent } from '../managecheckups/managecheckups.component';


const routes: Routes = [
	//Vision
  	{ path: '', redirectTo: 'vision', pathMatch: 'full' },
	  { path: 'vision', component: VisionComponent },
    { path: 'goals', redirectTo: 'goals/all' },
    { path: 'goals/all', component: ListGoalsComponent },
    { path: 'goals/create', component: CreateGoalComponent },
    { path: 'goals/edit/:id', component: EditGoalComponent },
    { path: 'habbits', component: ManageHabbitsComponent },
    { path: 'mindsets', component: ManageMindsetsComponent },
    { path: 'checkups', redirectTo: 'editcheckupquestions' },
    { path: 'checkups/:category', component: ManageCheckupsComponent },
    { path: 'editcheckupquestions', component: EditCheckupQuestionsComponent },
    { path: 'framework', component: FrameworkComponent },
    { path: 'wishs', component: ManageWishsComponent },
    { path: 'learningFields', component: ManageLearningFieldsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule],

})
export class AppRoutingModule {

  constructor(private router:Router){
  }

  navigate(string: string){
    this.router.navigateByUrl(string);
  }
}
