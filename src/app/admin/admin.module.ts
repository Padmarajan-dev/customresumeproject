import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumedetailsformComponent } from './resumedetailsform/resumedetailsform.component';
import {RouterModule} from '@angular/router';
import {Route} from './resumedetailformroute/resumedetailformroute.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [ResumedetailsformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Route)
  ]
})
export class AdminModule { }
