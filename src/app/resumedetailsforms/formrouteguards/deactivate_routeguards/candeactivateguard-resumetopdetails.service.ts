import { Injectable } from '@angular/core';
import {CanDeactivate,Router} from '@angular/router';
import { ResumetopdetailsComponent } from '../../resumetopdetails/resumetopdetails.component';
@Injectable({
  providedIn: 'root'
})
export class CandeactivateguardResumetopdetailsService implements CanDeactivate<ResumetopdetailsComponent> {

  constructor(private route:Router) { }
  canDeactivate(component:ResumetopdetailsComponent ):boolean{
    if(component.topform.dirty)
    {
    if(confirm("do You want Discard your changes?.if you disacard it you will doesn't  get a mail link of this resume template")==false)
    {
      this.route.navigate(['templates']);
    }

    }
    return true;
  };
}
