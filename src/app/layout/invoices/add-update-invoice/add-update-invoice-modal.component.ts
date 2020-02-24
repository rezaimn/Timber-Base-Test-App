import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ClientsModel} from '../../clients/clients.model';
import {ItemsModel} from '../../items/items.model';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {InvoicesModel} from '../invoices.model';
import {SubTotalAndTaxPipe} from '../../../shared/pipes/sub-total-and-tax.pipe';


/**
 * @ignore
 */
@Component({
  selector: 'app-add-update-invoice-modal',
  templateUrl: './add-update-invoice-modal.component.html',
  styleUrls: ['./add-update-invoice-modal.component.scss']
})
export class AddUpdateInvoiceModalComponent implements OnInit {
  invoice: InvoicesModel = new InvoicesModel({});
  filteredClients: ClientsModel[] = [];
  filteredItems: ItemsModel[] = [];

  constructor(private subTotalAndTaxPipe: SubTotalAndTaxPipe,
              public dialogRef: MatDialogRef<AddUpdateInvoiceModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(this.data.invoice.number){
      this.invoice={...this.data.invoice};
    }

  }

  ngOnInit(): void {
    if (!this.data.invoice.number) {
      this.invoice.items.push(new ItemsModel({}));
    }

  }

  clientSearchChange(clientName) {

    this.filteredClients = [...this.data.clientsList.filter(client => client.name.toLowerCase().indexOf(clientName.toLowerCase()) !== -1)];
    if (this.filteredClients.length === 1) {
      this.invoice.client = {...this.filteredClients[0]};
    }
  }

  itemSearchChange(itemName, index) {
    this.filteredItems = [...this.data.itemsList.filter(item => item.name.toLowerCase().indexOf(itemName.toLowerCase()) !== -1)];
    if (this.filteredItems.length === 1 ) {
      this.invoice.items[index] = {...this.filteredItems[0]};
      this.invoice.items[index].qtyHrRate = this.invoice.items[index].qtyHrRate||0;
      this.invoice.items[index].amount = this.invoice.items[index].amount||0;
    }
  }

  addNewItem() {
    this.invoice.items.push(new ItemsModel({}));
  }

  deleteItem(index) {
    this.invoice.items.splice(index, 1);
  }

  setItemQty(qty, index) {
    this.invoice.items[index].amount = qty * this.invoice.items[index].unitCost;
  }

  saveInvoice() {
    this.invoice.tax = this.subTotalAndTaxPipe.transform(this.invoice.items, 'tax');
    this.invoice.total = this.subTotalAndTaxPipe.transform(this.invoice.items, 'subTotal') +
      this.subTotalAndTaxPipe.transform(this.invoice.items, 'tax');
    this.invoice.date = new Date().toISOString();
    this.dialogRef.close(this.invoice);
  }
  cancelInvoice(){
    this.dialogRef.close(null);
  }
}
