import { NgFor } from '@angular/common';
import { Component,Input } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  

  @Input()  links:PageLink[] =[];

  constructor(){
    console.log('constructor called',this.links.length)
   
}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
      console.log('Init called',this.links.length)

}

}
