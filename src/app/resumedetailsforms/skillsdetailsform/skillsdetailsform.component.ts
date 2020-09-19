import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup, FormControl} from '@angular/forms'
import {ResumesavedataService} from '../../resumesavedata.service';
import {Router} from '@angular/router';
import { ResumedetailsService } from 'src/app/dynamicresumes/resumedetails.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-skillsdetailsform',
  templateUrl: './skillsdetailsform.component.html',
  styleUrls: ['./skillsdetailsform.component.scss']
})
export class SkillsdetailsformComponent implements OnInit {
  skillsformgroup:FormGroup;
  selectedskillslist:any=[];
  skills:string='';
  skillslist=['HTML','XML','CSS','JavaScript','Java','AngularJs','Angular 2.0','Python','C','C++','MySql'];
  //for get a skilldetails while on update
  skillsfromdatabase:any=[];
  selectedskillslistskill_lvls:string='';
updatedskillslist:string='';
rangechanged:boolean=false;
  constructor(public resumeconetntservice:ResumedetailsService,private route:Router,private fb:FormBuilder,private service:ResumesavedataService,private router:Router) { 
   
  }
  detect()
  {
    this.rangechanged=true;
  }
  addworks(event)
  {

    if(event.target.checked)
    {
    this.selectedskillslist.push({skill:event.target.value,skill_lvl:0});
    }else
    {
      const index=this.selectedskillslist.findIndex(x=>x.skill==event.target.value);
      this.selectedskillslist.splice(index,1)
      console.log(index);
    }
    for(var i=1;i<this.selectedskillslist.length;i++)
    {
      let skillsarray=this.skillsformgroup.get('skills') as FormArray;
      let levelsarray=this.skillsformgroup.get('levels') as FormArray;
      skillsarray.push(this.fb.control(''));
      levelsarray.push(this.fb.control(''));
      this.skillsformgroup.get('levels').setValue(this.selectedskillslist[i].skill_lvl);
    }
  }
  skilldetails()
  {
for(var i=0;i<this.selectedskillslist.length;i++)
{
  if(i<(this.selectedskillslist.length-1))
{
this.selectedskillslistskill_lvls+=this.selectedskillslist[i].skill_lvl+',';
this.updatedskillslist+=this.selectedskillslist[i].skill+',';
}else
{
  this.selectedskillslistskill_lvls+=this.selectedskillslist[i].skill_lvl; 
  this.updatedskillslist+=this.selectedskillslist[i].skill; 
}
}
    var formdata=new FormData();
    var resumeid=localStorage.getItem('resumeid');
    formdata.append('resumeid',resumeid);
    formdata.append('userid',localStorage.getItem('loginnedid'));
    formdata.append('skills',this.updatedskillslist);
    if(this.route.url.includes('update') && !this.rangechanged)
    {
      formdata.append('levels',this.selectedskillslistskill_lvls);
    }else
    {
    formdata.append('levels',this.skillsformgroup.get('levels').value);
    }
    console.log(formdata.get('levels'));
    this.service.saveskillsdetails(formdata).subscribe((data)=>{
      console.log(data);
      if(data=='Data Inserted Successfully')
      {
      this.route.navigate(['edit/sociallinks']);
      }
      if(data=='Data Updated Successfully')
      {
        this.route.navigate(['update/sociallinks']);
      }
    });
  }
  skip()
  {
    this.route.navigate(['update/sociallinks']);
  }
  //funtion for get a skilldetails while on update
  getskillscontent()
{

  var resumedetails=new FormData();
  var userid=localStorage.getItem('loginnedid');
  var resumeid=localStorage.getItem('resumeid');
 resumedetails.append('resumeid',resumeid);
  resumedetails.append('userid',userid);
  this.resumeconetntservice.getskillsdetails(resumedetails).subscribe((data)=>{
    let skills=data[0].skills.split(',');
    let skill_levels=data[0].skill_levels.split(',');
    for(var i=0;i<skills.length;i++)
    {
    $('#'+skills[i]).prop('checked',true);
    if(skill_levels[i]!=='')
    {
      this.selectedskillslist.push({skill:skills[i],skill_lvl:skill_levels[i]});
    }else
    {
      skill_levels=0
      this.selectedskillslist.push({skill:skills[i],skill_lvl:skill_levels[i]});
    }
  }
  console.log(this.selectedskillslist.length);
  for(var i=0;i<this.selectedskillslist.length;i++)
  {
    let skillsarray=this.skillsformgroup.get('skills') as FormArray;
    let levelsarray=this.skillsformgroup.get('levels') as FormArray;
    skillsarray.push(this.fb.control(''));
    levelsarray.push(this.fb.control(skill_levels[i]));
  }
  });

}
  next()
  {
   this.router.navigate(['edit/sociallinks']); 
  }
  ngOnInit() {
    this.skillsformgroup=this.fb.group({
      'skills':this.fb.array([
        this.fb.control('')
      ]),
      'levels':this.fb.array([
        this.fb.control('')
     ])
     });
     if(this.route.url.includes('update'))
     {
       this.getskillscontent();
     }
   
  }

}
