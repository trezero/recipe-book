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
var recipe_item_component_1 = require('./recipe-item.component');
var recipe_service_1 = require("../recipe.service");
var router_1 = require("@angular/router");
var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = [];
        this.recipeSelected = new core_1.EventEmitter();
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RecipeListComponent.prototype, "recipeSelected", void 0);
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-list',
            templateUrl: 'recipe-list.component.html',
            directives: [recipe_item_component_1.RecipeItemComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map