import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { InitShellModule } from './init-shell/init-shell.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    InitShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
