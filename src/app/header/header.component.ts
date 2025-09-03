import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuService } from '../menu.service';
import { PageLink } from '../page-link';
import { ProfileComponent } from '../profile/profile.component';
import { LogClass, LogFactory } from '../../utils/ClsDeco';
import validate,{Logger} from '../../utils/MethodDeco';
@Component({
  selector: 'app-header',
  standalone: true,
  providers:[MenuService],
  imports: [LogoComponent,MenuComponent,ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
// @LogFactory("DEBUG-Headed Initlaized")
export class HeaderComponent {
// custom property
  heading ="My First Angular Component"
   
  links:PageLink[] =[]
  service: MenuService;
  value='Hello';

  constructor(service :MenuService){

    console.log('constructor called-Service Injected')
    this.service = service;
  }
  
  @Logger
  ngOnInit(): void {

    this.links=this.service.getLinks();
    
  }

  @validate("length")
  sayHello():string{
    let response = "bye"
    this.value = response;
    return response
  }

  invokeDecorated(){
    this.value =this.sayHello();
  }
}
