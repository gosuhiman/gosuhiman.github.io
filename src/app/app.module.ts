import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SocialLinksComponent} from './social-links/social-links.component';
import {MainSkillsComponent} from './main-skills/main-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SocialLinksComponent,
    MainSkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
