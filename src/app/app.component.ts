import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { TodoComponent } from "./todo/todo.component";
import { TableHeadComponent } from './table-head/table-head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TableComponent, TodoComponent, TableHeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';

  tableHeading ="Order Status"
}
