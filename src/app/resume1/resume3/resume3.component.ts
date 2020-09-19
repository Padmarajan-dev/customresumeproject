import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume3',
  templateUrl: './resume3.component.html',
  styleUrls: ['./resume3.component.scss']
})
export class Resume3Component implements OnInit {

  constructor() { }
 
public loadScript_1() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src ='../../../assets/resumetempassets_2/js/custom.js';
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
  ngOnInit() {
    this.loadScript_1();
  }

}
