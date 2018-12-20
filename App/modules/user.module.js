"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var user_list_component_1 = require("../components/user-list/user-list.component");
var user_list_service_1 = require("../components/user-list/user-list.service");
var user_highlight_directive_1 = require("../components/user-list/user-highlight.directive");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            providers: [
                user_list_service_1.UserListService
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                user_list_component_1.UserListComponent,
                user_highlight_directive_1.HighlightDirective
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                user_list_component_1.UserListComponent
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map