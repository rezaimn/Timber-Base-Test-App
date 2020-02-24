import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {InvoicesModel} from './invoices.model';
import {MatDialog} from '@angular/material/dialog';
import {ClientsModel} from '../clients/clients.model';
import {ItemsModel} from '../items/items.model';
import {AddUpdateInvoiceModalComponent} from './add-update-invoice/add-update-invoice-modal.component';
import {MatTableDataSource} from '@angular/material/table';
import {ConfirmModalComponent} from '../../shared/components/confirm.modal/confirm-modal.component';
import {ViewInvoicePdfModalComponent} from './view-invoice-pdf/view-invoice-pdf-modal.component';
import {UserModel} from '../../auth/register/user.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoiceList;
  invoiceListT: InvoicesModel[] = [];
  clientsList: ClientsModel[] = [];
  itemsList: ItemsModel[] = [];
  userData: UserModel;

  constructor(private httpService: HttpService,
              public dialog: MatDialog) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit(): void {
    this.httpService.get('./assets/stored-data-files/invoices-list.json').subscribe(
      res => {
        this.invoiceList = res;
        this.invoiceListT = res;
      }
    );
    this.httpService.get('./assets/stored-data-files/clients-list.json').subscribe(
      res => {
        this.clientsList = res;
      }
    );
    this.httpService.get('./assets/stored-data-files/items-list.json').subscribe(
      res => {
        this.itemsList = res;
      }
    );
  }

  openInvoiceAddUpdateModal(invoice, index): void {

    const dialogRef = this.dialog.open(AddUpdateInvoiceModalComponent, {
      width: '80%',
      data: {
        invoice: {...invoice},
        clientsList: this.clientsList,
        itemsList: this.itemsList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (invoice) {
          Object.assign(this.invoiceList[index], {...result});
          // this.httpService.put('invoice', result).subscribe(
          //   res => {
          //     Object.assign(this.invoiceList[index], {...result});
          //   });
        } else {
          this.invoiceListT.push(result);
          // this.httpService.post('invoice', result).subscribe(
          //   res => {
          //     this.invoiceListT.push(result);
          //   }
          // );
        }
        this.invoiceList = new MatTableDataSource<InvoicesModel>(this.invoiceListT);
      }
    });
  }

  invoiceViewPdf(invoice) {
    const dialogRef = this.dialog.open(ViewInvoicePdfModalComponent, {
      width: '80%',
      panelClass: 'pdf-view-modal',
      data: {
        invoice: {invoice},
        userData: this.userData
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  deleteInvoice(index) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '60%',
      data: {
        message: 'Are you sure to delete this invoice?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.invoiceListT.splice(index, 1);
        this.invoiceList = new MatTableDataSource<InvoicesModel>(this.invoiceListT);
        // this.httpService.delete(`invoice/${this.invoiceListT[index].id}`).subscribe(
        //   res => {
        //     this.invoiceListT.splice(index, 1);
        //     this.invoiceList = new MatTableDataSource<InvoicesModel>(this.invoiceListT);
        //   });
      }
    });
  }
}
