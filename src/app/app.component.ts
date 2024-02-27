import {Component} from '@angular/core';
import {CityComponent} from "./components/city/city.component";
import {HttpClientModule} from "@angular/common/http";
import {NavMenuComponent} from "./components/nav-menu/nav-menu.component";
import {RouterOutlet} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadCities} from "./store/city.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityComponent, HttpClientModule, NavMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GISProject';

  constructor(private store: Store) {
    this.store.dispatch(loadCities());
  }
}
