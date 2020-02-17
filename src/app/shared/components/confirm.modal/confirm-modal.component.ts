import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


/**
 * @ignore
 */
@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
    deleteText = '';

    constructor(
        public dialogRef: MatDialogRef<ConfirmModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.deleteText = data.message;
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
