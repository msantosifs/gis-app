import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {cityReducer} from "./store/city.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CityEffects} from "./store/city.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({}),
      StoreModule.forFeature('cities', cityReducer),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature(CityEffects),
      )]
};
