import { Directive,ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appContainerrefdirective]'
})
export class ContainerrefdirectiveDirective {

  constructor(public view:ViewContainerRef) { }

}
