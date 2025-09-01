import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { TodoComponent } from "./todo/todo.component";
import { TableHeadComponent } from './table-head/table-head.component';
import { ProfileComponent } from "./profile/profile.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TableComponent, TodoComponent, TableHeadComponent, ProfileComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';

  tableHeading ="Order Status"
}
