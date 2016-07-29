"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var shopping_list_1 = require("./app/shopping-list");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [shopping_list_1.ShoppingListService]);
//# sourceMappingURL=main.js.map