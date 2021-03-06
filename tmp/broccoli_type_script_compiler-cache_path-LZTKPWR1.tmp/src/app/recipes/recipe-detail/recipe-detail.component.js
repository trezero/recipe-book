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
var router_1 = require('@angular/router');
var recipe_1 = require("../recipe");
var shopping_list_1 = require("../../shopping-list");
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(sls, router, route) {
        this.sls = sls;
        this.router = router;
        this.route = route;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.route;
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.sls.addItems(this.selectedRecipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this.router.navigate(['/recipes']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeDetailComponent.prototype, "selectedRecipe", void 0);
    RecipeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-detail',
            templateUrl: 'recipe-detail.component.html'
        }), 
        __metadata('design:paramtypes', [shopping_list_1.ShoppingListService, router_1.Router, router_1.ActivatedRoute])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map