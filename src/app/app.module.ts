import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  LocalstorageService,
  AppService,
  MetaService,
  NavService,
  SettingService,
} from '@lamnhan/ngx-useful';
import { NguixHeaderComponentModule, NguixFooterComponentModule } from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
  ],
  providers: [
    LocalstorageService,
    AppService,
    MetaService,
    NavService,
    SettingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
