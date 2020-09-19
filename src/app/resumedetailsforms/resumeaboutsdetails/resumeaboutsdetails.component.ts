import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , NgForm } from '@angular/forms';
import {ResumesavedataService } from '../../resumesavedata.service';
import { Router,ActivatedRoute} from '@angular/router';
import { ResumedetailsService } from 'src/app/dynamicresumes/resumedetails.service';
@Component({
  selector: 'app-resumeaboutsdetails',
  templateUrl: './resumeaboutsdetails.component.html',
  styleUrls: ['./resumeaboutsdetails.component.scss']
})
export class ResumeaboutsdetailsComponent implements OnInit {
  wait:boolean=false;
  characterlength:number;
  characterlength2:number;
  public aboutus:FormGroup;
  //for insert data on elements while on update 
  objective:any;
  address:any;
  age:any;
  mobile:any;
  email:any;
  constructor(private resumeconetntservice:ResumedetailsService ,private  fb:FormBuilder,private router:Router,private current:ActivatedRoute,private dataservice:ResumesavedataService ) { }
  charactercount($event)
  {
  this.characterlength=$event.target.value.length;
  }
  charactercount2($event)
  {
  this.characterlength2=$event.target.value.length;
  }
//get details from a database  for insert data on elements before update
     getresumecontent()
     {
       var userid=localStorage.getItem('loginnedid');
       var resumeid=localStorage.getItem('resumeid');
       var resumedetails=new FormData();
       resumedetails.append('resumeid',resumeid);
       resumedetails.append('userid',userid);
       this.resumeconetntservice.getaboutusdetails(resumedetails).subscribe((data)=>{
        console.log(data);
        this.objective=data[0].objective;
        this.address=data[0].address;
        this.age=data[0].age;
        this.mobile=data[0].mobile;
        this.email=data[0].email;
        this.aboutus.get('objective').setValue(this.objective);
        this.aboutus.get('address').setValue(this.address);
        this.aboutus.get('age').setValue(this.age);
        this.aboutus.get('mobile').setValue(this.mobile);
        this.aboutus.get('email').setValue(this.email);
      });
     }
  saveaboutus()
  {
    console.log(about);
    this.wait=true;
    var resumeid=localStorage.getItem('resumeid');
    var about=new FormData();
    about.append('objective',this.aboutus.value.objective);
    about.append('address',this.aboutus.value.address);
    about.append('age',this.aboutus.value.age);
    about.append('mobile',this.aboutus.value.mobile);
    about.append('email',this.aboutus.value.email);
    about.append('userid',this.aboutus.value.userid);
    about.append('resumeid',resumeid);
    this.dataservice.saveaboutusdetails(about).subscribe((data)=>{
      console.log('from server'+data);
      if(data=='Data Inserted Successfully')
      {
        this.wait=false;
        this.next();
      }
      if(data=='Data Updated Successfully')
      {
        this.router.navigate(['update/portfolio']);
      }
    });
  }
  next()
  {
    this.router.navigate(['edit/portfolio']);
  }
  skip()
  {
    this.router.navigate(['update/portfolio']);
  }
  ngOnInit() {
this.aboutus=this.fb.group({
  'objective':['',[Validators.required]],
  'address':['',[Validators.required]],
  'age':['',[Validators.required]],
  'mobile':['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[0-9_]*$/)]],
  'email':['',[Validators.required,Validators.email]],
  'userid':[localStorage.getItem('loginnedid')]
});
if(this.router.url.includes('update'))
{
this.getresumecontent();
}
 window.scrollTo(0,0);
  }

}
