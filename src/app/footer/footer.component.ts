import { Component } from '@angular/core';
import { ComponentOneComponent } from "../component-one/component-one.component";
import { ComponentTwoComponent } from "../component-two/component-two.component";
import { MatcompComponent } from "../matcomp/matcomp.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ComponentOneComponent, ComponentTwoComponent, MatcompComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
