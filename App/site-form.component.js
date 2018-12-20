"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site2_1 = require("./site2");
var siteformcomponent = /** @class */ (function () {
    function siteformcomponent() {
        this.urls = ['www.runoob.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
        this.model = new site2_1.site2(1, '菜鸟教程', this.urls[0], 10000);
        this.submitted = false;
        this.active = true;
    }
    siteformcomponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(siteformcomponent.prototype, "diagnostic", {
        // TODO: 完成后移除
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    siteformcomponent.prototype.newSite = function () {
        var _this = this;
        this.model = new site2_1.site2(5, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    siteformcomponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-form',
            templateUrl: "./site-form.component.html"
        })
    ], siteformcomponent);
    return siteformcomponent;
}());
exports.siteformcomponent = siteformcomponent;
//# sourceMappingURL=site-form.component.js.map