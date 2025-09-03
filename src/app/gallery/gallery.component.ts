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

@Input({required:true}) photos!:string[];

  photoclass = 'photo'
  showThis:boolean = false;


   @Output() myevent:EventEmitter<string> =new EventEmitter<string>();

  constructor(){

    // this.photos= ["assets/images/first.jpeg","assets/images/logo.png"]


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

        console.log('on init called')

          this.showThis =this.photos.length>2 ? true : false;

    
  }
  send(image:string):void{

    console.log('send called')
    this.myevent.emit(image)
  }

  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    console.log('destroy called')
  }

  
}
