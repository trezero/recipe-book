import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ShoppingListService} from "./app/shopping-list";
import { APP_ROUTES_PROVIDERS } from "./app/app.routes";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTES_PROVIDERS,
  ShoppingListService,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
