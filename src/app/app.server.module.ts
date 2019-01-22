import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { InitShellModule } from './init-shell/init-shell.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { AppModule } from './app.module';

const routes: Routes = [ { path: 'app-shell-path', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
    InitShellModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {
}
