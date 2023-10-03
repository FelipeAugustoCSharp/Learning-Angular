import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highLightMouse]'
})
export class HighlightMouseDirective {

@HostListener('mouseenter') onMouseOver(){
  /*this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')*/
  this.bkgColor = 'yellow'
}
@HostListener('mouseleave') onMouseLeave(){
/*  this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')*/
this.bkgColor = 'white'
}

@HostBinding('style.backgroundColor') bkgColor?: string;




  constructor(
    //private _elementRef:ElementRef, 
    //private _renderer:Renderer2
    ){ }

}
