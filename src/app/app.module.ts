import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './shared/guard/auth.guard';
import {AlertMessageService} from './shared/services/alert-message.service';
import {EventEmitterService} from './shared/services/event-emitter.service';
import {DataService} from './shared/services/data.service';
import {ConfirmModalComponent} from './shared/components/confirm.modal/confirm-modal.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/modules/shared.module';
import {ViewInvoicePdfModalComponent} from './layout/invoices/view-invoice-pdf/view-invoice-pdf-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent,
    ViewInvoicePdfModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AlertMessageService,
    EventEmitterService,
    DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmModalComponent,
    ViewInvoicePdfModalComponent
  ]
})
export class AppModule {
}
