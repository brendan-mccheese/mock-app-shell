import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-entry/address-form/address-form.component';

const routes: Routes = [
  {
    path: "",
    component: AddressFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
