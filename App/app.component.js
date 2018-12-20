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
var site_1 = require("./site");
var active_title_service_1 = require("./components/title/active-title.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(activeTitleService) {
        this.title = '站点列表';
        this.sites = [
            new site_1.Site(1, '菜鸟教程'),
            new site_1.Site(2, 'Google123'),
            new site_1.Site(3, 'Taobao123'),
            new site_1.Site(4, 'Facebook123')
        ];
        this.mySite = this.sites[0];
        this.appTitle = 'Hello title';
        // 使用这个服务
        this.appTitle = activeTitleService.getTitle();
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            /* template: `
                <h1>{{title}}</h1>
                <h2>我喜欢的网站: {{mySite.name}}</h2>
                <p>网站列表:</p>
                <ul>
                  <li *ngFor="let site of sites">
                   {{ site.name }}
                  </li>
                </ul>
                <p *ngIf="sites.length > 3">你有很多个喜欢的网站!</p>
                 <click-me></click-me>
                 <click-me2></click-me2>
                ` ,  */
            templateUrl: "./templates/app.component.html"
            //template: require(`./app.component.html`)
        }),
        __metadata("design:paramtypes", [active_title_service_1.ActiveTitleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map