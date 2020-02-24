import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../shared/interceptor/layout-http.interceptor';
import {SharedModule} from '../shared/modules/shared.module';
import {SidebarComponent} from '../../app/layout/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,

  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
  ],
  entryComponents: []
})
export class LayoutModule {
}
