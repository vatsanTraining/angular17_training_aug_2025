import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

@Input({required:true}) cphotos!:string[];

  photoclass = 'photo'

   @Output() myevent:EventEmitter<string> =new EventEmitter<string>();

  constructor(){

    // this.photos= ["assets/images/first.jpeg","assets/images/logo.png"]
  }

  send(image:string):void{

    console.log('send called')
    this.myevent.emit(image)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log('on init called')
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    console.log('destroy called')
  }

  
}
