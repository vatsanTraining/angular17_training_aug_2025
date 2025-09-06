import { NgFor, NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';
import { PageLink } from '../page-link';
import { MenuService } from '../menu.service';
import { RouterLink } from "@angular/router";
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  

  @Input()  links:PageLink[] =[];
  logstatus: boolean=false;
show:string ='show';
showthis =true;

  constructor(private service:UtilityService){
    console.log('constructor called',this.links.length)
   
}


ngOnInit(): void {
  
  this.service.loginStatus.subscribe(val =>{
     this.logstatus = val

if(this.links[4].linkText ==='Login' ){
  this.showthis=false
   }

   if(this.links[5].linkText ==='Logout' ){
   }

  })


}

}
