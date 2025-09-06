import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { NgStyle, NgIf, NgClass, NgFor } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [GalleryComponent, NgStyle, NgIf, NgClass, NgFor,LogoutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  selctedPicture = '';
      
  photos= ["assets/images/first.jpeg","assets/images/second.png","assets/images/logo.png"]
showGallery=true ;
showProfile=false
onChange(val: string) {

  console.log(val)
  this.selctedPicture =val;
 this.showGallery=!this.showGallery
 this.showProfile=!this.showProfile
}

}
