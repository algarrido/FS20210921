import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';
import { CommonServicesModule } from '../common-services/common-services.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SecurityModule } from '../security';



@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,AjaxWaitComponent, PageNotFoundComponent, HeaderComponent,
  ],
  exports: [
    HomeComponent,NotificationComponent,AjaxWaitComponent,PageNotFoundComponent, HeaderComponent,
  ],
  imports: [
    CommonModule,CommonServicesModule, SecurityModule,RouterModule.forChild([]),
  ]
})
export class MainModule {

  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
