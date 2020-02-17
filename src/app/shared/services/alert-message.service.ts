import {Injectable} from '@angular/core';
import {EventEmitterService} from './event-emitter.service';

@Injectable()
export class AlertMessageService {

  constructor(private eventEmitterService: EventEmitterService) {
  }

  /**
   *  get title and message and emit alertMessage to show the success alert
   * @param title
   * @param message
   */
  success(title, message) {
    this.eventEmitterService.alertMessage.emit({type: 'success', title: title, message: message});
  }

  /**
   *  get title and message and emit alertMessage to show the fail alert
   * @param title
   * @param message
   */
  fail(title, message) {
    this.eventEmitterService.alertMessage.emit({type: 'danger', title: title, message: message});
  }

  /**
   *  get title and message and emit alertMessage to show the warn alert
   * @param title
   * @param message
   */
  warn(title, message) {
    this.eventEmitterService.alertMessage.emit({type: 'warning', title: title, message: message});
  }

  /**
   *  get title and message and emit alertMessage to show the info alert
   * @param title
   * @param message
   */
  info(title, message) {
    this.eventEmitterService.alertMessage.emit({type: 'info', title: title, message: message});
  }

}
