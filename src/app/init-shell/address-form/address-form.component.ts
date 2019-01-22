import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveNext() {
    this.router.navigate(['stats'])
  }

}
