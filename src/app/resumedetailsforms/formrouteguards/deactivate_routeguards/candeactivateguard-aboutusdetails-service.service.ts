import { Injectable } from '@angular/core';
import {CanDeactivate,Router} from '@angular/router';
import { ResumeaboutsdetailsComponent } from '../../resumeaboutsdetails/resumeaboutsdetails.component';
@Injectable({
  providedIn: 'root'
})
export class CandeactivateguardAboutusdetailsServiceService implements CanDeactivate<ResumeaboutsdetailsComponent>{

  constructor(private route:Router) { }
  canDeactivate(component:ResumeaboutsdetailsComponent):boolean{
    if(component.aboutus.dirty)
    {
    if(confirm("do You want Discard your changes?.if you disacard it you will doesn't  get a mail link of this resume template")==false)
    {
      this.route.navigate(['templates']);
    }
    }
    return true;
  }
}
