import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form/address-form.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [AddressFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
  ]
})
export class AddressEntryModule { }
