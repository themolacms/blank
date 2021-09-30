import { NgModule } from '@angular/core';
import { NguixDashboardModule, DASHBOARD_CONFIG, dashboardConfig } from '@lamnhan/nguix-dashboard';

@NgModule({
  imports: [NguixDashboardModule],
  exports: [NguixDashboardModule],
  providers: [
    {
      provide: DASHBOARD_CONFIG,
      useValue: dashboardConfig({
        parts: [
          'front',
          'option',
          'page',
          'post',
          'category',
          'tag',
          'media',
          'user',
        ],
        plugins: [],
      }),
    }
  ]
})
export class MolaAppDashboardModule {}
