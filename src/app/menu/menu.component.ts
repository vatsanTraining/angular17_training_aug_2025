import { NgFor } from '@angular/common';
import { Component,Input } from '@angular/core';
import { PageLink } from '../page-link';
import { MenuService } from '../menu.service';

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
  
      console.log('Init called',this.links.length)

}

}
