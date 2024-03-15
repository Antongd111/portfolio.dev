import { Component } from '@angular/core';
import { PhotoContainerComponent } from '../photo-container/photo-container.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoContainerComponent, DescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
