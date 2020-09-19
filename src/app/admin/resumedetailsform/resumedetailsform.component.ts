import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {ResumesavedataService} from '../../resumesavedata.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumedetailsform',
  templateUrl: './resumedetailsform.component.html',
  styleUrls: ['./resumedetailsform.component.scss']
})
export class ResumedetailsformComponent implements OnInit {
  detailsformgroup:FormGroup;
  detailsformdata=new FormData();
  screenshoturl:any=' ';
  screenshot:any;
  fileformdata=new FormData();
  constructor(private fb:FormBuilder,private dataservice:ResumesavedataService,private http:HttpClient,private route:Router) { }
  resumeformdetails()
  {
    this.detailsformdata.set('resumeid',this.detailsformgroup.value.resumeid);
    this.detailsformdata.set('resumename',this.detailsformgroup.value.resumename);
    this.detailsformdata.set('screenshoturl',this.detailsformgroup.value.screenshoturl);
    this.detailsformdata.set('desc',this.detailsformgroup.value.desc);
    this.dataservice.saveresumedetails(this.detailsformdata).subscribe((data)=>{
      if(data =='details saved')
      {
        this.route.navigate(['templates']);
      }
    });
  }

  ngOnInit() {
    this.detailsformgroup=this.fb.group({
     'resumeid':['',[]],
     'resumename':['',[]],
     'screenshoturl':['',[]],
     'desc':['',[]],
    })
  }

}
