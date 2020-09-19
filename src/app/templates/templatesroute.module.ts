import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { PreviewComponent } from '../preview/preview/preview.component';
import { dynamicResume1Component } from '../dynamicresumes/dynamicresume1/dynamicresume1.component';
export const template1route:Routes=[
{
  path:'preview/:resumeid',
 component:PreviewComponent
},
{
 path:'dynamic/:userid/:dynamicresumeid',
 component:PreviewComponent
},
{
  path:'edit',
  loadChildren:'../resumedetailsforms/resumedetailsforms.module#ResumedetailsformsModule'
},
{
  path:'update',
  loadChildren:'../resumedetailsforms/resumedetailsforms.module#ResumedetailsformsModule'
}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   //RouterModule.forChild(template1route)
  ]
})
export class TemplatesrouteModule { }
