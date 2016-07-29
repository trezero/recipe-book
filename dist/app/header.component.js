"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_directive_1 = require("./dropdown.directive");
var router_1 = require("@angular/router");
var recipe_service_1 = require("./recipes/recipe.service");
var HeaderComponent = (function () {
    function HeaderComponent(recipeService) {
        this.recipeService = recipeService;
    }
    HeaderComponent.prototype.onStore = function () {
        this.recipeService.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.recipeService.fetchData();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-header',
            templateUrl: 'header.component.html',
            directives: [dropdown_directive_1.DropdownDirective, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map