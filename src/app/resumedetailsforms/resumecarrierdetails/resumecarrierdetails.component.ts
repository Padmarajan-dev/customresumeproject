import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import {ResumesavedataService} from '../../resumesavedata.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resumecarrierdetails',
  templateUrl: './resumecarrierdetails.component.html',
  styleUrls: ['./resumecarrierdetails.component.scss']
})
export class ResumecarrierdetailsComponent implements OnInit {
  carrierformGroup:FormGroup;
  carrierformData:FormData;
  selectedsubjects:any=[];
  wait:boolean=false;
  designations:any=['M.sc','B.sc','MCA','BCA','MBA','M.com','B.com','M.Tech','B.Ed','M.A','B.E','B.A','Diploma','HSC','SSLC'];
  subjects:any=[
    {
      'M.sc':[
       'computer science',
       'information Technogy',
       'chemistry',
       'physics',
       'BioTechnology',
       'Mathematics',
       'Biology'
    ],
    'MCA':[
      'Computer Applications'
    ],
    'MBA':[],
    'B.com':[],
    'M.com':[],
    'BCA':[
      'Computer Applications'
    ],
    'M.Tech':[
      'Computer Science and Engineering',
      'Electrical Engineering',
      'Electronics and Communication Engineering',
      'Mechanical Engineering',
      'Software Engineering',
      'Thermal Engineering'
    ],
    'B.Tech':[

    ],
    'B.sc':[
      'computer science',
      'information Technogy',
      'chemistry',
      'physics',
      'Mathematics',
      'Biology',
      'Digital Filmmaking',
      'Animation Filmmaking',
      'Game Design & Development',
      'Anthropology',
      'Animation',
    ],
    'B.Ed':[
       'Accounts',
       'Information Technology',
       'Tamil',
       'English',
       'Commerce',
       'Maths'
  ],
    'M.A':[
      'Anthropology',
      'English',
      'Tamil',
      'Mathematics',
      'Political Science',
    ],
    'B.E':[
      'Civil Engineering',
      'Computer Engineering',
      'Electrical Engineering',
      'Architectural Engineering',
      'chemical Engineering',
      'Architectural Engineering'
    ],
    'B.A':[
      'Anthropology',
      'English',
      'Tamil',
      'Mathematics',
      'Political Science'
    ],
    'Diploma':[
      'animation and multimedia',
      'Hotel Management',
      'Fire and safety technology',
      'Hearing Language and Speech',
      'Physiotherapy'
    ],
  }
  ]
  constructor(private fb:FormBuilder,private current:ActivatedRoute,private route:Router,private service:ResumesavedataService) { }
  selected(val)
  {
 if(this.subjects[0][val])
  {
    this.selectedsubjects=this.subjects[0][val];
  }
  }
  addmore()
  {
    let degreesarray=this.carrierformGroup.get('degrees') as FormArray;
    let instutionarray=this.carrierformGroup.get('instution') as FormArray;
    let subjectsarray=this.carrierformGroup.get('subjects') as FormArray;
    let yearspanfromarray=this.carrierformGroup.get('yearspanfrom') as FormArray;
    let yearspantoarray=this.carrierformGroup.get('yearspanto') as FormArray;
    let marksarray=this.carrierformGroup.get('marks') as FormArray;
    degreesarray.push(this.fb.control('',[Validators.required]));
    instutionarray.push(this.fb.control('',[Validators.required]));
    yearspanfromarray.push(this.fb.control('',[Validators.required]));
    yearspantoarray.push(this.fb.control('',[Validators.required]));
    subjectsarray.push(this.fb.control('',[Validators.required]));
    marksarray.push(this.fb.control('',[Validators.required]));
  }
  getdegreecontrols()
  {
    return(this.carrierformGroup.get('degrees') as FormArray).controls;
  }
  carrierdetails()
  {
    this.wait=true;
    var  carrierformData=new FormData();
    var degrees='';
    var instution='';
    var desination=this.carrierformGroup.get('degrees').value;
    var subjects=this.carrierformGroup.get('subjects').value;
    var instutions=this.carrierformGroup.get('instution').value;
    var length=(this.carrierformGroup.get('degrees').value).length;
   carrierformData.append('instutions',this.carrierformGroup.get('instution').value);
    for(var i=0;i<length;i++)
    {
      if(i<(length-1))
      {
      degrees=degrees+desination[i]+' in '+subjects[i]+',';
      instution=instution+instutions[i]+'|';
      }else
      {
        degrees=degrees+desination[i]+' in '+subjects[i];
        instution=instution+instutions[i];
      }
    }
    localStorage.getItem('uniqueid')
    carrierformData.append('resumeid',localStorage.getItem('resumeid'));
    carrierformData.append('userid',localStorage.getItem('loginnedid'));
    carrierformData.append('instutions',instution);
    carrierformData.append('degrees',degrees);
   carrierformData.append('yearspanfrom',this.carrierformGroup.get('yearspanfrom').value);
   carrierformData.append('yearspanto',this.carrierformGroup.get('yearspanto').value);
   carrierformData.append('marks',this.carrierformGroup.get('marks').value);
   this.service.savecarrierdetails(carrierformData).subscribe((data)=>{
     if(data=='You Will Recieve A Mail from us Shortly..')
     {
      this.wait=false;
       alert('You Will Recieve A resume preview Link on your Mail  Shortly..');
       localStorage.removeItem('uniqueid');
       localStorage.removeItem('resumeid');
       this.route.navigate(['templates']);
     }
     if(data=='Data Updated Successfully')
     {
      this.wait=false; 
     }
   });
  }
  ngOnInit() {
    this.carrierformGroup=this.fb.group({
      'degrees':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      'subjects':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      'instution':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      'marks':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      'yearspanfrom':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      'yearspanto':this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
    })
  }

}
