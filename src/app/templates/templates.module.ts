import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates/templates.component';
import {TemplatesrouteModule,template1route} from './templatesroute.module';
import {Routes,RouterModule} from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PreviewModule } from '../preview/preview.module';
@NgModule({
  declarations: [TemplatesComponent],
  imports: [
    CommonModule,
    RatingModule,
    RouterModule.forRoot(template1route),
    PreviewModule,
  ],
  exports:[TemplatesComponent]
})
export class TemplatesModule { }
