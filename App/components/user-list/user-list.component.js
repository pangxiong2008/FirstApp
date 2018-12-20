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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_list_service_1 = require("./user-list.service");
var user_class_1 = require("./user.class");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userListService) {
        this.userListService = userListService;
    }
    UserListComponent.prototype.addNewUser = function () {
        var user = new user_class_1.User(this.username, this.users.length);
        this.users.push(user);
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.users = this.userListService.fetchAllUsers();
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/components/user-list/user-list.template.html'
        }),
        __metadata("design:paramtypes", [user_list_service_1.UserListService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map