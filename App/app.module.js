"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var click_me_component_1 = require("./click-me.component");
var click_me2_component_1 = require("./click-me2.component");
var keyup_components_1 = require("./keyup.components");
var little_tour_component_1 = require("./little-tour.component");
var loop_back_component_1 = require("./loop-back.component");
var site_form_component_1 = require("./site-form.component");
var title_component_1 = require("./components/title/title.component");
var active_title_service_1 = require("./components/title/active-title.service");
var highlight_directive_1 = require("./components/title/highlight.directive");
var user_module_1 = require("./modules/user.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                active_title_service_1.ActiveTitleService // 添加我们刚才的服务
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                user_module_1.UserModule // 添加我们需要的UserModule模块 
            ],
            declarations: [app_component_1.AppComponent, click_me_component_1.ClickMeComponent, click_me2_component_1.ClickMe2Component,
                keyup_components_1.KeyUpComponent_v1,
                keyup_components_1.KeyUpComponent_v2,
                keyup_components_1.KeyUpComponent_v3,
                keyup_components_1.KeyUpComponent_v4,
                little_tour_component_1.LittleTourComponent,
                loop_back_component_1.LoopbackComponent,
                site_form_component_1.siteformcomponent,
                title_component_1.TitleComponent,
                highlight_directive_1.HighlightDirective],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map