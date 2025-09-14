import { Injectable } from '@angular/core';
import { PageLink } from './page-link';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  links:PageLink[];

  constructor() {
    
    this.links=[
                {link:"home",linkText:"Home"},
                {link:"products",linkText:"Products"},
                {link:"orders",linkText:"Orders"},
                {link:"todo",linkText:"Contact"},
                {link:"customer",linkText:"Customer"},
                {link:"login",linkText:"Login"},
                {link:"logout",linkText:"Logout"},
                {link:"reviews",linkText:"Reviews"}


    ]

   }

   getLinks():PageLink[]{

    return this.links;
   }
}
