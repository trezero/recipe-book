"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var shopping_list_1 = require("./app/shopping-list");
var app_routes_1 = require("./app/app.routes");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [app_routes_1.APP_ROUTES_PROVIDERS, shopping_list_1.ShoppingListService]);
//# sourceMappingURL=main.js.map