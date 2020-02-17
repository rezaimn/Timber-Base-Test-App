import {Component, OnInit} from '@angular/core';
import {EventEmitterService} from '../../services/event-emitter.service';

/**
 * @ignore
 */
@Component({
    selector: 'app-alert-message',
    templateUrl: './alert-message.component.html',
    styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

    messageObject = {
        type: '',
        title: '',
        message: ''
    };
    display = false;

    constructor(public eventEmitterService: EventEmitterService) {

    }

    ngOnInit() {
        /**
         * shows alert for 5 seconds
         */
        this.eventEmitterService.alertMessage.subscribe(
            (alert => {
                this.messageObject = alert;
                this.display = true;
                setTimeout(() => {
                    this.display = false;
                }, 5000);
            })
        );
    }


}
