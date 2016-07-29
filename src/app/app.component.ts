import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'

import { RecipeService } from "./recipes";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})

export class AppComponent {
  title = 'app works!';
}
