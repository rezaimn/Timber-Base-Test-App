import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AuthGuard} from './shared/guard/auth.guard';
import {AlertMessageService} from './shared/services/alert-message.service';
import {EventEmitterService} from './shared/services/event-emitter.service';
import {DataService} from './shared/services/data.service';
import {ConfirmModalComponent} from './shared/components/confirm.modal/confirm-modal.component';
import {ViewPdfModalComponent} from './shared/components/view-pdf-modal/view-pdf-modal.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/modules/shared.module';
import {ConstantsService} from "./shared/services/constants.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent,
    ViewPdfModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule
  ],
  providers: [
    AuthGuard,
    AlertMessageService,
    EventEmitterService,
    DataService,
    ConstantsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmModalComponent,
    ViewPdfModalComponent
  ]
})
export class AppModule {
}
