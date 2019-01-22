import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './init-shell/address-form/address-form.component';

const routes: Routes = [
  {
    path: "",
    component: AddressFormComponent
  },
  {
    path: "stats",
    loadChildren: "./witch-stats/witch-stats.module#WitchStatsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
