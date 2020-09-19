import { Component, OnInit ,ViewChild,ComponentFactoryResolver} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { ContainerrefdirectiveDirective } from '../containerrefdirective.directive';
import {Resume1Component} from '../../resume1/resume1/resume1.component';
import {Resume2Component} from '../../resume1/resume2/resume2.component';
import { Resume3Component } from '../../resume1/resume3/resume3.component';
import { dynamicResume1Component } from 'src/app/dynamicresumes/dynamicresume1/dynamicresume1.component';
import { Dynamicresume2Component } from 'src/app/dynamicresumes/dynamicresume2/dynamicresume2.component';
import {Dynamicresume3Component} from '../../dynamicresumes/dynamicresume3/dynamicresume3.component';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
   currentcomponent:number;
   currentcomp:any;
   @ViewChild(ContainerrefdirectiveDirective,{static:true})
   Viewcontainer:ContainerrefdirectiveDirective;
   resumearray=[Resume1Component,Resume2Component,Resume3Component ];
   dynamicresumearray=[dynamicResume1Component,Dynamicresume2Component,Dynamicresume3Component];
  constructor(private currentRouter:ActivatedRoute,private componentfactory:ComponentFactoryResolver) {
   }
  ngOnInit() {
   this.Viewcontainer.view.clear();
   if(this.currentRouter.snapshot.params['resumeid'])
   {
   this.currentcomponent=this.currentRouter.snapshot.params['resumeid']-1;
   this.currentcomp=this.componentfactory.resolveComponentFactory(this.resumearray[this.currentcomponent]);
   this.Viewcontainer.view.createComponent(this.currentcomp);
   }
  if(this.currentRouter.snapshot.params['dynamicresumeid'])
   {
    this.currentcomponent=this.currentRouter.snapshot.params['dynamicresumeid']-1;
   this.currentcomp=this.componentfactory.resolveComponentFactory(this.dynamicresumearray[this.currentcomponent]);
   this.Viewcontainer.view.createComponent(this.currentcomp);
   }
  }
}
