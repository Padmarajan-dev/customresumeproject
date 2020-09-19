import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import {ResumesavedataService } from '../../resumesavedata.service'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumedetailsService } from 'src/app/dynamicresumes/resumedetails.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-resumetopdetails',
  templateUrl: './resumetopdetails.component.html',
  styleUrls: ['./resumetopdetails.component.scss']
})
export class ResumetopdetailsComponent implements OnInit {
  /*@ViewChild('topform',{static:false})
  topformref:NgForm;*/
  selected:any;
  username:any;
  imgsrcs:any;
  loader:boolean;
  url:any;
  downloadurls:any;
  checkboxvalue:any;
  wait:boolean=false;
   works:any=[
     'WebDesigner',
     'PhotoShop',
     'BuisnessAnaylist',
     'VideoEditing',
     'UI/UXDeveloper',
     'Appdeveloper',
    ];
    profilefile:File
   work:any=[];
   myworks:string;
   previewurl:any=[];
   form:any;
   userid:string='2';
   emptyfields:boolean;
   resumeid:number;
   uploadform=new FormData();
   topform:FormGroup;
   //for updation
   userprofile:any;
   photo:any;
   name:any;
   hideonupdate:boolean=false;
   ourskills:any=[];
   selectedworks:any=[];
   checkboxfield:boolean;
   clickupdatfile:boolean=false;
  constructor(private currentroute:ActivatedRoute,private route:Router,private storage:AngularFireStorage,private postservice:ResumesavedataService ,private fb:FormBuilder,public resumeconetntservice:ResumedetailsService) {
   }
   checkfields()
    {
    if(this.username=='')
     {
       this.emptyfields=true;
     }else
     {
       this.emptyfields=false;
     }
    }
   
  addworks(event)
  {
    this.checkboxfield=true;
    this.form=this.fb.group({
      userprofile:['']
    });
   
    if(event.target.checked)
    {
    this.work.push(event.target.value);
    }else
    {
      console.log('uncehecked'+event.target.value);
      const index=this.work.indexOf(event.target.value);
      const index_1=this.selectedworks.indexOf(event.target.value);
      this.work.splice(index,1);
      this.selectedworks.splice(index_1,1)
    }
 
  }
 
   //get details from a database  for insert data on elements before update
  getresumecontent()
  {
    var userid=localStorage.getItem('loginnedid');
    var resumeid=localStorage.getItem('resumeid');
    var resumedetails=new FormData();
    resumedetails.append('resumeid',resumeid);
    resumedetails.append('userid',userid);
    this.resumeconetntservice.getresumedetails(resumedetails).subscribe((data)=>{
      this.name=data[0].username;
      this.topform.get('username').setValue(this.name);
      this.selectedworks=data[0].works.split(',');
      for(var i=0;i<this.selectedworks.length;i++)
      {
        $('#'+this.selectedworks[i]).prop('checked',true);
      }
      this.userprofile=data[0].user_profile;
    });
  }

 
 
  skip()
  {
  this.route.navigate(['update/about']);
  }
  //common funtion defintion for file upload
   fileupload(event)
  {
    this.loader=true;
    this.hideonupdate=true;
    let profilefile=event.target.files;
    var reader=new FileReader();
    for (let profile of profilefile) {
    reader.onload=(e:any)=>{
      this.previewurl = e.target.result;
   }
    reader.readAsDataURL(profile);
    }
       this.imgsrcs=this.storage.upload('/'+event.target.files[0].name+'/',event.target.files[0]);
       this.imgsrcs.then(()=>{
         this.loader=false;
         this.url=this.storage.ref('/'+event.target.files[0].name+'/');
         this.downloadurls=this.url.getDownloadURL();
         this.downloadurls.subscribe((data)=>{
           this.uploadform.append('profile',data);
         });
       });
  }
  //
  //call while on edit 
  upload(event)
  {
   this.fileupload(event);
  }
    //call while on update
  updatefile(event)
  {
    this.clickupdatfile=true;
    this.fileupload(event);
  }

  uploadtopinfo()
  {
    this.wait=true;
    var userid=localStorage.getItem('loginnedid');
    var resumeid=localStorage.getItem('resumeid');
  this.uploadform.append('username',this.username);
  //for while click a save button while without update it sends same data to the database
  if(this.route.url.includes('update') && this.clickupdatfile==false)
  {
    this.uploadform.append('profile',this.userprofile);
  }
  if(this.route.url.includes('update'))
  {
    this.uploadform.append('works',this.selectedworks);
  }else
  {
  this.uploadform.append('works',this.work);
  }
  console.log('works'+this.uploadform.get('works'));
  this.uploadform.append('userid', userid);
  this.uploadform.append('resumeid',resumeid);
  this.postservice.savetopdetails(this.uploadform).subscribe((data)=>{
    if(data=='Data Inserted Successfully')
    {
      this.wait=false;
      this.route.navigate(['edit/about']);
    }else if(data=='Data Updated Successfully')
    {
      this.wait=false;
     this.route.navigate(['update/about']);
    }
  });
  }
  uploadtop()
  {
    this.route.navigate(['edit/about']);
  }
  //function for add and remove validators
  ngOnInit() {
    this.checkfields();
    if(this.route.url.includes('update'))
    {
    this.getresumecontent();
    }
   setInterval(()=>{
     this.checkfields();
   },900);
   this.topform=this.fb.group({
    'username':this.fb.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(8),Validators.pattern(/^[A-Za-z_]*$/)]),
    'skill':this.fb.control('',[Validators.required])
   });
   window.scrollTo(0,0);
  }

}

