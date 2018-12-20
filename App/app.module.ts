import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import {ClickMeComponent} from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './keyup.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopbackComponent } from './loop-back.component';
import { siteformcomponent } from './site-form.component';
import {TitleComponent} from './components/title/title.component';
import {ActiveTitleService} from './components/title/active-title.service';
import {HighlightDirective} from './components/title/highlight.directive';
import {UserModule} from './modules/user.module';

@NgModule({
  providers: [
    ActiveTitleService // 添加我们刚才的服务
],
  imports:      [ BrowserModule, FormsModule,
    UserModule // 添加我们需要的UserModule模块 
  ],
  declarations: [ AppComponent,  ClickMeComponent,ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent,
    siteformcomponent,
    TitleComponent,
    HighlightDirective],
  bootstrap:    [ AppComponent]
})
export class AppModule { }