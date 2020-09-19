import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { ResumetopdetailsComponent } from '../../resumetopdetails/resumetopdetails.component';
@Injectable({
  providedIn: 'root'
})
export class CanactivateguardResumetopdetailsServiceService  implements CanActivate{

  constructor(private route:Router) { }
  canActivate():boolean
  {
    if(localStorage.getItem('resumeid'))
    {
      return true;
    }else
    {
      this.route.navigate(['templates']);
    }
  }

    
}
