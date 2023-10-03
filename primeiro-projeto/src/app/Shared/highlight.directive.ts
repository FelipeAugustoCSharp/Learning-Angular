import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bkgColor?: string;

  @HostListener('mouseenter') onMouseOver(){
    this.bkgColor = this.highLightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
  this.bkgColor = this.defaultColor;
  }
  

  @Input() defaultColor: string = 'white';
  @Input('highlight') highLightColor:string = 'yellow'


  constructor() { }
  ngOnInit(){
    this.bkgColor = this.defaultColor;
  }
}
