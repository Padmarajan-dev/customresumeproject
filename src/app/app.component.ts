import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'another';
  storageLength;
  constructor(public router:Router)
  {

  }
  dynamicpreview()
  {
  var user=localStorage.getItem('loginnedid');
  this.router.navigate(['dynamic/'+user+'/2']);
  }
  logout()
  {
    localStorage.removeItem('loginnedid');
    localStorage.removeItem('role');
    alert('You are Logged out successfully');
    this.router.navigate(['home']);
  }
  login()
  {
    this.router.navigate(['users']);
  }
  ngOnInit()
  {
    this.storageLength = window.localStorage.length;
  }
}
