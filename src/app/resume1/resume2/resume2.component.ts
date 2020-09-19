import { Component, OnInit } from '@angular/core';
import { ResumesavedataService } from 'src/app/resumesavedata.service';

@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.scss']
})
export class Resume2Component implements OnInit {
  banner='../../../assets/resumetempassets_1/images/banner-bg.jpg'
  photo=`url(${this.banner})`;
  constructor() { }
  url:any=['../../../assets/resumetempassets_1/js/bootstrap.min.js','../../../assets/resumetempassets_1/js/custom.js',
  '../../../assets/resumetempassets_1/js/jquery-1.8.2.min.js','../../../assets/resumetempassets_1/js/jquery.cslider.js',
  '../../../assets/resumetempassets_1/js/jquery.isotope.min.js','../../../assets/resumetempassets_1/js/jquery.nav.js',
  '../../../assets/resumetempassets_1/js/modernizr-latest.js','../../../assets/resumetempassets_1/js/fancybox/jquery.fancybox.pack.js'
  ,'../../../assets/resumetempassets_1/js/owl-carousel/owl.carousel.min.js'];
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
public loadScript_6() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[6];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_7() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[7];
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
public loadScript_8() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = this.url[8];
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
    this.loadScript_6();
    this.loadScript_7();
    this.loadScript_8();
  }

}
