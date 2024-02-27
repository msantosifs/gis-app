import {Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild} from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import {Coordinates} from "../../models/city.model";
import {isPlatformBrowser} from "@angular/common";
import {loadModules} from 'esri-loader';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss'
})
export class MapComponent {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @Input() set coordinates(coordinates: Coordinates){
    this.initializeMap(coordinates);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  private async initializeMap(coordinates: Coordinates) {
    // Make sure we are in the browser before initializing map components
    if (isPlatformBrowser(this.platformId)) {
      // Initialize ArcGIS maps for each client
      const [EsriMap, EsriMapView] = await loadModules(["esri/Map", "esri/views/MapView"]);

      const map = new EsriMap({
        basemap: 'streets-vector',
      });

      const view = new EsriMapView({
        map,
        container: this.mapViewEl.nativeElement,
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 12,
      });

    }
  }
}
