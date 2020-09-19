import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {ResumedetailsformComponent} from '../resumedetailsform/resumedetailsform.component';
export const Route:Routes=[
  {
    path:'',
    component:ResumedetailsformComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule.forChild(Route)
  ]
})
export class ResumedetailformrouteModule { }
