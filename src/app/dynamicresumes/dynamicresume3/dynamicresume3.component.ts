import { Component, OnInit ,ElementRef } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {ResumedetailsService} from '../resumedetails.service';
import {ActivatedRoute} from '@angular/router';
import { ResumesavedataService } from 'src/app/resumesavedata.service';
import {Rating} from '../starratingDetails';
import {reviewpayload} from '../checkreview';
@Component({
  selector: 'app-dynamicresume3',
  templateUrl: './dynamicresume3.component.html',
  styleUrls: ['./dynamicresume3.component.scss']
})
export class Dynamicresume3Component implements OnInit {
  containerreference:ElementRef;
  resumecontent:any;
  username:any;
  works:any;
  userprofile:any;
  objective:any;
  age:any;
  mobile:any;
  email:any;
  address:any;
  portfolio:any=[];
  socialarray:any=[];
  eachsocialmedia:any=[];
  carrierdetails:any=[];
  skills:any=[];
  socialmedias:any=[];
  public photo;
  opactitystyle:boolean=true;
  showrating:boolean=true;
  payload:Rating;
  reviewPayLoad:reviewpayload;
  constructor(public service:ResumesavedataService,public thisroute:ActivatedRoute,public resumeconetntservice:ResumedetailsService) { }
  url:any=['../../../assets/resumetempassets/scripts/main.js']
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src =this.url[0];
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  getresumecontent()
  {
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getresumedetails(resumedetails).subscribe((data)=>{
      this.username=data[0].username;
      this.works=data[0].works;
      this.userprofile=data[0].user_profile;
      console.log(this.username);
    });
  }
  getaboutuscontent()
  {
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getaboutusdetails(resumedetails).subscribe((data)=>{
      console.log(data);
      this.objective=data[0].objective;
      this.address=data[0].address;
      this.age=data[0].age;
      this.mobile=data[0].mobile;
      this.email=data[0].email;
    });
  }

  getportfoliocontent()
  {
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getportfoliodetails(resumedetails).subscribe((data)=>{
      console.log('portfolio',data[0]);
      let images=data[0].images.split(',');
      let urls=data[0].urls.split(',');
      let titles=data[0].titles.split(',');
      let descs=data[0].descs.split('|');
      for(var i=0;i<images.length;i++)
      {
      this.portfolio.push({images:images[i],urls:urls[i],titles:titles[i],descs:descs[i]});
      }
    });
  }
  getskillscontent()
  {
  
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getskillsdetails(resumedetails).subscribe((data)=>{
      let skills=data[0].skills.split(',');
      let skill_levels=data[0].skill_levels.split(',');
      for(var i=0;i<skills.length;i++)
      {
      if(skill_levels[i]!=='')
      {
      this.skills.push({skills:skills[i],skill_level:skill_levels[i]+'%'});
      }else
      {
        this.skills.push({skills:skills[i],skill_level:'0%'});
      }
    }
    });
  }
  getsocialmediascontent()
  {
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getsocialmediadetails(resumedetails).subscribe((data)=>{
      this.socialarray=data[0].socialmedias.split(',');
      for(var i=0;i<this.socialarray.length;i++)
      {
        this.eachsocialmedia.push(this.socialarray[i].split('=>'));
       if(this.eachsocialmedia[i][0]=='Facebook')
       {
       this.socialmedias.push({media:this.eachsocialmedia[i][0],icon:'fa fa-facebook',link:this.eachsocialmedia[i][1]});
       }
       if(this.eachsocialmedia[i][0]=='Google')
       {
       this.socialmedias.push({media:this.eachsocialmedia[i][0],icon:'fa fa-google-plus',link:'mailto:'+this.eachsocialmedia[i][1]});
       }
      }
    });
  }

  getcarriercontent()
  {
    var resumedetails=new FormData();
   resumedetails.append('resumeid',this.thisroute.snapshot.paramMap.get('dynamicresumeid'));
    resumedetails.append('userid',this.thisroute.snapshot.paramMap.get('userid'));
    this.resumeconetntservice.getcarrierdetails(resumedetails).subscribe((data)=>{
      var degree=data[0].degrees.split(',');
      var instution=data[0].instutions.split('|');
      var mark=data[0].marks.split(',');
      var from=data[0].yearfrom.split(',');
      var to=data[0].yearto.split(',');
      for(var i=0;i<degree.length;i++)
      {
        this.carrierdetails.push({
          degree:degree[i],
          instution:instution[i],
          mark:mark[i],
          from:from[i],
          to:to[i],
        })
      }
    })
  }
  submitreview(star)
  {
   this.payload = {
    resumeid : this.thisroute.snapshot.paramMap.get('dynamicresumeid'),
    userid   : this.thisroute.snapshot.paramMap.get('userid'),
    stars    : star
    };
  this.service.starrating(this.payload).subscribe((data)=>{
  console.log(data);  
  if(data=='inserted')
  {
    this.showrating=false;
  }
  });
  }
  //opacity and show rating panel
  checkalredyrated()
  {
    this.reviewPayLoad = {
      resumeid : this.thisroute.snapshot.paramMap.get('dynamicresumeid'),
      userid  : this.thisroute.snapshot.paramMap.get('userid'),
    }
    console.log(this.reviewPayLoad);
    this.service.checkreview(this.reviewPayLoad).subscribe((data)=>{
         if(data=='Exists')
         {
           this.showrating=false;
         }
    });
  }

///
  sendmail(mailid)
  {
    window.open('mailto:'+mailid);
  }
  
  ngOnInit() {
    this.loadScript();
    this.getresumecontent();
    this.getaboutuscontent();
    this.getportfoliocontent();
    this.getskillscontent();
    this.getsocialmediascontent();
    this.getcarriercontent();
    this.checkalredyrated();
  }

}
