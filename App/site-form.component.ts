import {Component} from '@angular/core';
import {site2} from './site2';
@Component(
    {
       moduleId:module.id,
       selector:'site-form',
       templateUrl:`./site-form.component.html`
    }
)
export class siteformcomponent
{
    urls = ['www.runoob.com', 'www.google.com',
    'www.taobao.com', 'www.facebook.com'];
model = new site2(1, '菜鸟教程', this.urls[0], 10000);
submitted = false;
onSubmit() { this.submitted = true; }
// TODO: 完成后移除
get diagnostic() { return JSON.stringify(this.model); }

active = true;
  newSite() {
    this.model = new site2(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}