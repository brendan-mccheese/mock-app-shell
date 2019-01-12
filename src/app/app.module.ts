import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AddressEntryModule } from './address-entry/address-entry.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutWrapperComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    AddressEntryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
