import { Injectable } from '@angular/core';
import {CanDeactivate,Router} from '@angular/router';
import {ResumecarrierdetailsComponent} from '../../resumecarrierdetails/resumecarrierdetails.component';
@Injectable({
  providedIn: 'root'
})
export class CandeactivateguardCarrierdetailsServiceService implements CanDeactivate<ResumecarrierdetailsComponent> {

  constructor(private route:Router) { }
  canDeactivate(component:ResumecarrierdetailsComponent):boolean{
    if(component.carrierformGroup.dirty)
    {
    if(confirm("do You want Discard your changes?.if you disacard it you will doesn't  get a mail link of this resume template")==false)
    {
      this.route.navigate(['templates']);
    }

    }
    return true;
  }
}
