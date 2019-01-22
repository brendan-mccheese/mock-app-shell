import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
