import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { Resume1Component } from '../resume1/resume1/resume1.component';
import {ContainerrefdirectiveDirective} from './containerrefdirective.directive'
import { RouterModule } from '@angular/router';
import { dynamicResume1Component } from '../dynamicresumes/dynamicresume1/dynamicresume1.component';
import { Dynamicresume2Component } from '../dynamicresumes/dynamicresume2/dynamicresume2.component';
import {Dynamicresume3Component} from '../dynamicresumes/dynamicresume3/dynamicresume3.component';
import { Resume1Module } from '../resume1/resume1.module';
import { dynamicResume1Module } from '../dynamicresumes/dynamicresumes.module';
import { previewrouteModule } from './preview/preview.routes';
import {Resume2Component} from '../resume1/resume2/resume2.component';
import { Resume3Component } from '../resume1/resume3/resume3.component';
@NgModule({
  declarations: [PreviewComponent, ContainerrefdirectiveDirective],
  imports: [
    CommonModule,
    RouterModule,
    Resume1Module,
    previewrouteModule,
    dynamicResume1Module
  ],
  entryComponents:[Resume1Component,Resume2Component,Resume3Component,dynamicResume1Component,Dynamicresume2Component,Dynamicresume3Component],
  exports:[PreviewComponent]
})
export class PreviewModule { }
