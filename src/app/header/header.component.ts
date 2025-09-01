import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent,MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// custom property
  heading ="My First Angular Component"
   links=[
                {link:"home",linkText:"Home"},
                {link:"products",linkText:"Products"},
                {link:"orders",linkText:"Orders"},
                {link:"contact",linkText:"Contact"}
    ]

}
