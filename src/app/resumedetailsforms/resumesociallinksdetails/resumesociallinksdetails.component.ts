import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormArray} from '@angular/forms';
import {ResumesavedataService} from '../../resumesavedata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumesociallinksdetails',
  templateUrl: './resumesociallinksdetails.component.html',
  styleUrls: ['./resumesociallinksdetails.component.scss']
})
export class ResumesociallinksdetailsComponent implements OnInit {
  socialmediaform:FormGroup;
  Googlemap:string;
  selectedsocialmedialist:any=[];
  constructor(private  fb:FormBuilder,private route:Router,private service:ResumesavedataService) { }
  socialmediaslist:any=[
    {
    socialmedia:'Facebook',
    icon:'../../../assets/social_icons/iconfinder_facebook_icon_1399544.png'
    },
    {
    socialmedia:'Google',
    icon:'../../../assets/social_icons/iconfinder_google_plus_icon_1399543.png'
    },
    {
      socialmedia:'Instagram',
      icon:'../../../assets/social_icons/iconfinder_instagram_icon_1399542.png'
    },
    {
      socialmedia:'Linkedin',
      icon:'../../../assets/social_icons/iconfinder_Linkedin_icon_1399541.png'
    },
    {
      socialmedia:'Whatsapp',
      icon:'../../../assets/social_icons/iconfinder_whatsapp_287520.png'
    },
    {
     socialmedia: 'Github',
     icon:'../../../assets/social_icons/iconfinder_Github_1298743.png'
    },
  ]
    addworks(icon,event)
    {
  
      if(event.target.checked)
      {
      this.selectedsocialmedialist.push({'icon':icon,'socialmedia':event.target.value});
      }else
      {
        const index=this.selectedsocialmedialist.indexOf(icon);
        this.selectedsocialmedialist.splice(index,1)
      }
      for(var i=1;i<this.selectedsocialmedialist.length;i++)
      {
        let linksarray=this.socialmediaform.get('links') as FormArray;
        linksarray.push(this.fb.control(''));
      }
      console.log(this.selectedsocialmedialist);
    }
    sociallinkdetails()
    {
    var formdata=new FormData();
    var resumeid=localStorage.getItem('resumeid');
    formdata.append('resumeid',resumeid);
    formdata.append('userid',localStorage.getItem('loginnedid'));
    var socialmedias='';
    var links=[];
    links=this.socialmediaform.get('links').value;
    for(var i=0;i<this.selectedsocialmedialist.length;i++)
    {
    if(i<this.selectedsocialmedialist.length-1)
    {
    socialmedias=socialmedias+this.socialmediaslist[i].socialmedia+'=>'+links[i]+',';
    }else
    {
      socialmedias=socialmedias+this.socialmediaslist[i].socialmedia+'=>'+links[i]; 
    }
    }
    formdata.append('socialmedia',socialmedias);
    this.service.savesocialmediadetails(formdata).subscribe((data)=>{
     console.log(data);
     if(data=='Data Inserted Successfully')
    {
      this.route.navigate(['edit/carrier']);
    }
    if(data=='Data Updated Successfully')
    {
      this.route.navigate(['update/carrier']);
    }
    })
  }
  skip()
  {
    this.route.navigate(['update/carrier']);
  }
  ngOnInit() {
    this.socialmediaform=this.fb.group({
      'links':this.fb.array([
        this.fb.control('')
     ])
     });
  }
}
