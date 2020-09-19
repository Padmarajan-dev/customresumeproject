import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import {ResumesavedataService} from '../../resumesavedata.service'
import {stars} from './starspayload';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  resumes:any=[];
  filteredresumes:any=[];
  arrayofdata:any=[];
  starval:number;
  filterrating:boolean=false;
  userid=localStorage.getItem('loginnedid');
  constructor(private router:Router,private dataservice:ResumesavedataService) { }
  sidetrigger()
  {
    this.filterrating=true;  
  }
  filter(event)
  {
    this.filteredresumes=[];
  var starval=event.target.value;
this.dataservice.fetchresumedetails().subscribe((data)=>{
  for(var i=0;i<data.length;i++)
  {
   if(starval===data[i].rating)
   {
   this.filteredresumes.push(data[i]);
   }
  }
  });
  }
  loadresumes()
  {
    this.dataservice.fetchresumedetails().subscribe((data)=>{
      var checkdetails=new FormData();
      for(var i=0;i<data.length;i++)
      {
     this.resumes.push(data[i]);
      checkdetails.append('resumeid'+i,data[i].resume_id);
      }
      checkdetails.set('length',data.length);
      checkdetails.set('userid',this.userid);
      this.dataservice.checkresumeactivity(checkdetails).subscribe((data)=>{
        this.arrayofdata=data;
        for(var i=0;i<this.arrayofdata.length;i++)
        {
         this.resumes[i].resumestatus=data[i];
        }
      })
    });
    console.log(this.resumes);
  }
  getavgstars()
  {
    var starpayload = new FormData();
    this.dataservice.getavgstars().subscribe((res)=>{
      for(var i=0; i<res.length;i++)
      {
        starpayload.append('resumeid'+i,res[i]._id);
        starpayload.append('starvalue'+i,res[i].stars);
      }
      this.dataservice.postratingdetails(starpayload).subscribe((res)=>{
        console.log(res);
      });
    });
  }
  preview(resumeid)
  {
  this.router.navigate(['preview/'+resumeid]);
  }
 
  edit(resumeid)
  {
  if(localStorage.getItem('loginnedid')!=null)
  {
    localStorage.setItem('resumeid',resumeid);
    this.router.navigate(['edit']);
  }else
  {
    this.router.navigate(['users']);
  }
  }
  update(resumeid)
  {
  if(localStorage.getItem('loginnedid')!=null)
  {
    localStorage.setItem('resumeid',resumeid);
    this.router.navigate(['update']);
  }else
  {
    this.router.navigate(['users']);
  }
  }
  ngOnInit() {
    this.loadresumes();
    this.getavgstars();
    localStorage.removeItem('uniqueid');
    localStorage.removeItem('resumeid');
  }
}
