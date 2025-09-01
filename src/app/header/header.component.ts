import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuService } from '../menu.service';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  standalone: true,
  providers:[MenuService],
  imports: [LogoComponent,MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// custom property
  heading ="My First Angular Component"
   
  links:PageLink[] =[]
  service: MenuService;

  constructor(service :MenuService){

    console.log('constructor called-Service Injected')
    this.service = service;
  }
  ngOnInit(): void {

    this.links=this.service.getLinks();
    
  }
}
