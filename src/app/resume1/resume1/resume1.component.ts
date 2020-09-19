import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ResumesavedataService } from '../../resumesavedata.service';
@Component({
  selector: 'app-resume1',
  templateUrl: './resume1.component.html',
  styleUrls: ['./resume1.component.css']
})
export class Resume1Component implements OnInit {
 
 
  constructor( ) { }
  url:any=['../../../assets/resumetempassets/scripts/main.js','../../../assets/resumetempassets/js/core/jquery.3.2.1.min.js',
  '../../../assets/resumetempassets/js/core/popper.min.js','../../../assets/resumetempassets/js/core/bootstrap.min.js',
  '../../../assets/resumetempassets/js/now-ui-kit.js?v=1.1.0','../../../assets/resumetempassets/js/aos.js'];
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = this.url[0];
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
public loadScript_1() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[1];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_2() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[2];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_3() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[3];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_4() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[4];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_5() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[5];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
  ngOnInit() {
    this.loadScript();
    this.loadScript_1();
    this.loadScript_2();
    this.loadScript_3();
    this.loadScript_4();
    this.loadScript_5();
  }

}
