import { Injectable } from '@angular/core';
import {CanActivate, RouteReuseStrategy, Router} from '@angular/router'
import { ResumesavedataService } from '../resumesavedata.service';
@Injectable({
  providedIn: 'root'
})
export class AdminrouteguardService implements CanActivate {
  admindetails= new FormData()
  constructor(private route:Router) { }
  public canActivate():any{
    this.admindetails.append('userid',localStorage.getItem('loginnedid'));
    if(localStorage.getItem('role')!=undefined || localStorage.getItem('role')!=null)
    {
      return true;
    }else 
    {
      this.route.navigate(['home']);
    }
}
}
