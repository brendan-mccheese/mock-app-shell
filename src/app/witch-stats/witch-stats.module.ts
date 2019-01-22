import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WitchGraphComponent } from './witch-graph/witch-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { InitShellModule } from '../init-shell/init-shell.module';

@NgModule({
  declarations: [WitchGraphComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    InitShellModule,
    RouterModule.forChild([
      {
        path: "",
        component: WitchGraphComponent
      }
    ])
  ]
})
export class WitchStatsModule { }
