import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { AddressFormComponent } from './address-form/address-form.component';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [AddressFormComponent, LayoutWrapperComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AddressFormComponent, LayoutWrapperComponent
  ]
})
export class InitShellModule { }
