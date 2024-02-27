import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {City, Coordinates} from "../../models/city.model";
import {selectAllCities} from "../../store/city.selectors";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {selectCity} from "../../store/city.actions";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterLink,
    NgIf
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  cities$: Observable<City[]> = this.store.select(selectAllCities);

  isCitiesMenuVisible: boolean = false;

  constructor(private store: Store, private router: Router) {
  }
  toggleCitiesMenu(): void {
    this.isCitiesMenuVisible = !this.isCitiesMenuVisible;
  }

  openCityMap(city: City) {
    this.toggleCitiesMenu();
    this.store.dispatch(selectCity({city}))
    this.router.navigate(['cities', 'city']);
  }

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
