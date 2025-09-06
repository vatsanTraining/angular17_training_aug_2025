import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostListener('mouseover') over(){
    this.renderer.addClass(this.elementRef.nativeElement ,'acquaBackGround')
  }

  @HostListener('mouseout') out(){
    this.renderer.removeClass(this.elementRef.nativeElement,'acquaBackGround')
  }
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

   @Input('appHighlight')  propvalue1:string=''
   

  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    //console.log('native element'+this.elementRef.nativeElement)

    this.renderer.setStyle
           (this.elementRef.nativeElement, 'font-size',  	this.propvalue1);



  }

}


