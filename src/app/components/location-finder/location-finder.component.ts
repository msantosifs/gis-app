import {Component} from '@angular/core';
import {Coordinates} from "../../models/city.model";
import {NgIf} from "@angular/common";
import {MapComponent} from "../map-container/map-container.component";

@Component({
  selector: 'app-location-finder',
  standalone: true,
  templateUrl: './location-finder.component.html',
  imports: [
    NgIf,
    MapComponent
  ],
  styleUrls: ['./location-finder.component.scss']
})
export class FindLocationComponent {
  coordinates: Coordinates | undefined;
  positionError: string | undefined;

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coordinates = position.coords;
        this.positionError = undefined;
      }, (error) => {
        this.positionError = error.message;
        this.coordinates = undefined;
      });
    } else {
      this.positionError = "Geolocation is not supported by this browser.";
    }
  }
}
