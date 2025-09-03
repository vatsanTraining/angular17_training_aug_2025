import { Component } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { TodoComponent } from "./todo/todo.component";
import { TableHeadComponent } from './table-head/table-head.component';
import { ProfileComponent } from "./profile/profile.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { NgClass } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LogClass, LogFactory } from '../utils/ClsDeco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TableComponent, TodoComponent, TableHeadComponent, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//@LogClass
// @LogFactory("DEBUG-APP Component initialized")
export class AppComponent {
  title = 'Hello World';

  tableHeading ="Order Status"

  srchString:string =''

}
