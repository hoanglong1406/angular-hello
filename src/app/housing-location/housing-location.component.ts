import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import {RouterLink, RouterOutlet} from '@angular/router'

@Component({
  imports: [RouterLink,RouterOutlet],
  selector: 'app-housing-location',
  standalone: true,
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation
}
