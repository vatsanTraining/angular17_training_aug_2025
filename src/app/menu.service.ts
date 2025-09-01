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
                {link:"contact",linkText:"Contact"}
    ]

   }

   getLinks():PageLink[]{

    return this.links;
   }
}
