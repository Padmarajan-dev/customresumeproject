import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ResumesavedataService} from '../../resumesavedata.service'
import { FormGroup,FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginform:FormGroup;
  constructor(private service:ResumesavedataService,private router:Router,private fb: FormBuilder,private fb2:FormBuilder) { }
  gosignin()
  {
  this.router.navigate(['users/signin']);
  }
  login() {
    var fd = new FormData();
    fd.append('user', this.loginform.value.username);
    fd.append('mail', this.loginform.value.email);
    console.log(fd.getAll('user'));
    console.log(fd.getAll('mail'));
    if(this.loginform.value.username=='raju'&&this.loginform.value.email=='rajussp31121997@gmail.com')
    {
      localStorage.setItem('role','admin');
    }
    this.service.login(fd).subscribe((dta) => {
      console.log('from login'+dta[1]);
      if (dta[1] == 'Successfully Loggined') {
        localStorage.setItem('loginnedid', dta[0]);
        
        this.router.navigate(['']);
      }else
      {
       alert("LoginFailed,Entered Username Does'nt Exists");  
      }
    });

  }
  ngOnInit() {
    this.loginform = this.fb.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required]]
    });
  }

}
