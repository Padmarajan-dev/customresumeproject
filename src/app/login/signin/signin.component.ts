import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ResumesavedataService} from '../../resumesavedata.service'
import { FormGroup,FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinform:FormGroup;
  wait:boolean=false;
  constructor(private service:ResumesavedataService,private router:Router,private fb: FormBuilder,private fb2:FormBuilder) {
   }
  goback()
  {
    this.router.navigate(['users']);
  }
  signin()
  {
    var form=new FormData();
    this.wait=true;
  form.append('username',this.signinform.value.user);
  form.append('email',this.signinform.value.Email);
  form.append('mobile',this.signinform.value.mobile);
   this.service.signin(form).subscribe((data)=>{
     if(data=='You Will Recieve A Mail from us Shortly..')
     {
      this.wait=false;
       alert('SignIn successfully,You Will Recieve A Mail from us Shortly..')
     }else
     {
      this.wait=false;
      alert(data);
     }
   })
  }
  ngOnInit() {
    this.signinform=this.fb2.group({
      "user":['',[Validators.required,Validators.pattern(/^[a-zA-z_]*$/),Validators.minLength(3),Validators.maxLength(6)]],
      "Email":['',[Validators.required,Validators.email]],
      "mobile":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9_]*$/)]]
    });
  }
  }

