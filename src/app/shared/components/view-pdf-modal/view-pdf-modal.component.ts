import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


/**
 * @ignore
 */
@Component({
    selector: 'app-confirm-modal',
    templateUrl: './view-pdf-modal.component.html',
    styleUrls: ['./view-pdf-modal.component.scss']
})
export class ViewPdfModalComponent {
    base64Data = '';
    statementId = '';

    constructor(
        public dialogRef: MatDialogRef<ViewPdfModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.base64Data = data.base64Data;
        this.statementId = data.statementId;
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
