import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { firestore } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import {ResumesavedataService } from '../../resumesavedata.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-resumeportfoliodetails',
  templateUrl: './resumeportfoliodetails.component.html',
  styleUrls: ['./resumeportfoliodetails.component.scss']
})
export class ResumeportfoliodetailsComponent implements OnInit {
  characterlength:number;
  portfolioform:FormGroup;
  imagesurl:any=[];
  alllength:number;
  imgsrcs:any;
  url:any;
  downloadurls:any;
  filesdata=new FormData;
  constructor(private Router:Router,private fb:FormBuilder,private firestorage:AngularFireStorage,private service:ResumesavedataService ) { }
  charactercount($event)
  {
  this.characterlength=$event.target.value.length;
  }
  next()
  {
   this.Router.navigate(['edit/skills']);
  }
  skip()
  {
   this.Router.navigate(['update/skills']);
  }
  getimages(event)
  {
  this.url=event.target.files;
 this.filesdata.append('urllength',this.url.length);
  for(let i=0;i<this.url.length;i++)
  {
    this.imgsrcs=this.firestorage.upload('/'+event.target.files[i].name+'/',event.target.files[i]);
    this.imgsrcs.then(()=>{
      this.url=this.firestorage.ref('/'+event.target.files[i].name+'/');
      this.downloadurls=this.url.getDownloadURL();
      this.downloadurls.subscribe((data)=>{
        console.log('sharables'+i,data);
       this.filesdata.append('sharables'+i,data);
      });
    });
 
  }
  
 
  var file=event.target.files;
  for(let files of file )
  {
  var filereader=new FileReader();
  filereader.onload=(e:any)=>{
   this.imagesurl.push(e.target.result);
  };
  filereader.readAsDataURL(files);
}
for(var i=0;i<this.url.length-1;i++)
{
  let titlearray=this.portfolioform.get('titles') as FormArray;
  let descarray=this.portfolioform.get('descs') as FormArray;
    let urls=this.portfolioform.get('urls') as FormArray;
    titlearray.push( this.fb.control(''));
    descarray.push( this.fb.control(''));
    urls.push( this.fb.control(''));
}
  }
  gettitlecontrols()
  {
    return(this.portfolioform.get('titles') as FormArray).controls;
  }
  uploadportfolioform()
  {
  var descriptions='';
  for(var i=0;i<this.portfolioform.value.descs.length;i++)
  {
    if(i<this.portfolioform.value.descs.length-1)
    {
    descriptions=descriptions+this.portfolioform.value.descs[i]+'|';
    }else
    {
    descriptions=descriptions+this.portfolioform.value.descs[i];
    }
  }
  console.log(descriptions);
  var resumeid=localStorage.getItem('resumeid');
  this.filesdata.append('resumeid',resumeid);
  this.filesdata.append('userid',localStorage.getItem('loginnedid'));
  this.filesdata.append('titles',this.portfolioform.value.titles);
  this.filesdata.append('descs',descriptions);
  this.filesdata.append('urls',this.portfolioform.value.urls);
  this.service.saveportfoliodetails(this.filesdata).subscribe((data)=>{
    if( data=='Data Inserted Successfully')
    {
      this.Router.navigate(['edit/skills']);
    }if(data=='Data Updated Successfully')
    {
      this.Router.navigate(['update/skills']);
    }
  })
  }

  ngOnInit() {
    this.portfolioform=this.fb.group({
    'titles':new FormArray([
      this.fb.control('')
    ]),
    'descs':this.fb.array([
      this.fb.control(''),
    ]),
    'urls':this.fb.array([
      this.fb.control('')
    ])
  });
}
}
