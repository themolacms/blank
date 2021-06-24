import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import {
  MenuItem,
  // normal services
  LocalstorageService,
  CacheService,
  AppService,
  MetaService,
  NavService,
  SettingService,
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerMenu: MenuItem[] = [
    { text: 'APP.HOME', routerLink: [] },
    { text: 'APP.ABOUT', routerLink: ['about'] },
  ];

  footerMenu: MenuItem[] = [
    { text: 'Lam Nhan', href: 'https://lamnhan.com', target: '_blank' },
    { text: 'Mola CMS', href: 'https://mola.lamnhan.com', target: '_blank' },
    { text: 'Source code', href: 'https://github.com/themolacms/starter-blank', target: '_blank' }
  ];
  
  constructor(
    private translateService: TranslocoService,
    public localstorageService: LocalstorageService,
    public cacheService: CacheService,
    public appService: AppService,
    public metaService: MetaService,
    public navService: NavService,
    public settingService: SettingService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.cacheService.init();
    this.appService.setOptions({ splashScreen: true }).init();
    this.settingService
      .setOptions({
        onReady: () => this.appService.hideSplashScreen(),
      })
      .setIntegrations({
        localstorageService: this.localstorageService,
        translateService: this.translateService,
      })
      .init();
    this.navService
      .setIntegrations({ settingService: this.settingService })
      .init();
    this.metaService
    .setIntegrations({ settingService: this.settingService })
    .init(
      {
        url: 'https://starter-blank-preview.lamnhan.com/',
        title: 'Starter Blank Preview',
        description: 'The Starter Blank theme preview.',
        image: 'https://starter-blank-preview.lamnhan.com/assets/images/featured.jpg',
        locale: 'en-US',
      },
      /* MOLA:META_TRANSLATIONS */
    );
  }

}
