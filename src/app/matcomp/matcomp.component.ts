import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-matcomp',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatTooltipModule,MatCardModule],
  templateUrl: './matcomp.component.html',
  styleUrl: './matcomp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MatcompComponent {

}
