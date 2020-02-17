import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventEmitterService {

    /**
     * emitter for showing 4 different kind of alerts
     */
    alertMessage: any = new EventEmitter<any>();
    /**
     * emitter for showing loader gif while API calling
     */
    loading = new EventEmitter<boolean>();
    constructor() {
    }

}
