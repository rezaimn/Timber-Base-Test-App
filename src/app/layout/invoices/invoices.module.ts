import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoicesComponent} from './invoices.component';
import {InvoicesRoutingModule} from './invoices-routing.module';
import {SharedModule} from '../../shared/modules/shared.module';
import {AddUpdateInvoiceModalComponent} from './add-update-invoice/add-update-invoice-modal.component';


@NgModule({
  declarations: [InvoicesComponent, AddUpdateInvoiceModalComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule
  ],
  entryComponents: [AddUpdateInvoiceModalComponent]
})
export class InvoicesModule {
}
