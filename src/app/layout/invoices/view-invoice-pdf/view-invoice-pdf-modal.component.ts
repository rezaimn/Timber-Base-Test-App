import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoicesModel} from '../invoices.model';
import {UserModel} from '../../../auth/register/user.model';


/**
 * @ignore
 */
@Component({
    selector: 'app-view-invoice-pdf',
    templateUrl: './view-invoice-pdf-modal.component.html',
    styleUrls: ['./view-invoice-pdf-modal.component.scss']
})
export class ViewInvoicePdfModalComponent {
    invoice:InvoicesModel = new InvoicesModel({});
    userData:UserModel;
    constructor(
        public dialogRef: MatDialogRef<ViewInvoicePdfModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.invoice = {...data.invoice};
        this.userData = {...data.userData};
    }

    /**
     * cancel the confirmation process
     */
    cancel(): void {
        this.dialogRef.close(false);
    }

    /**
     * confirm the confirmation process
     */
    confirm(): void {
        this.dialogRef.close(true);
    }

}
