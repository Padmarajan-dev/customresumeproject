import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { PreviewComponent } from './preview.component';
export const previewroute:Routes=[
    {
        path:'',
        component:PreviewComponent
    },
]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(previewroute)
    ]
  })
  export class previewrouteModule { }