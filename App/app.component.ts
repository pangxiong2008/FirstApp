import { Component } from '@angular/core';
import { Site } from './site';
import {ActiveTitleService} from './components/title/active-title.service';

 
@Component({
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
    templateUrl: `./templates/app.component.html`
    //template: require(`./app.component.html`)

})
 


export class AppComponent {
   title = '站点列表';
  sites = [
      new Site(1, '菜鸟教程'),
      new Site(2, 'Google123'),
      new Site(3, 'Taobao123'),
      new Site(4, 'Facebook123')
      ];
  mySite = this.sites[0]; 
  appTitle = 'Hello title';
  constructor(activeTitleService: ActiveTitleService) {
    // 使用这个服务
    this.appTitle = activeTitleService.getTitle();
  }
}
