import { Component } from '@angular/core';

import {
  MenuItem,
  // normal services
  LocalstorageService,
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
    { text: 'Home', routerLink: [] },
    { text: 'About', routerLink: ['about'] },
  ];

  footerMenu: MenuItem[] = [
    { text: 'Lam Nhan', href: 'https://lamnhan.com', target: '_blank' },
    { text: 'Mola CMS', href: 'https://mola.lamnhan.com', target: '_blank' },
    { text: 'Source code', href: 'https://github.com/themolacms/starter-blank', target: '_blank' }
  ];
  
  constructor(
    private localstorageService: LocalstorageService,
    private appService: AppService,
    private metaService: MetaService,
    public navService: NavService,
    private settingService: SettingService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.appService.init({ splashScreen: true });
    this.settingService.init(
      {
        onReady: () => this.appService.hideSplashScreen(),
      },
      {},
      {
        localstorageService: this.localstorageService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.metaService.init(
      {
        title: 'A Mola Theme Preview',
        description: 'The Mola theme preview decription.',
        image: 'https://starter-blank-preview.lamnhan.com/assets/images/featured.jpg',
        url: 'https://starter-blank-preview.lamnhan.com/',
        lang: 'en',
        ogLocale: 'en-US',
        ogSiteName: 'A Mola Theme Preview'
      },
    );
  }

}
