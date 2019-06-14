import { Injectable } from '@angular/core';
import { ApicallService } from '../../util/apicall.service';
import { Constants } from '../../util/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    private apicallService: ApicallService,
    private constants: Constants
  ) { }

  /**
   * @desc method to log the messages to firebase.
   * @param message the message to be logged.
   * @param type type of the log(ERROR, INFO, DEBUG...etc).
   * @param successCallback success callback function.
   * @param failureCallback failure callback function.
   */
  public log(message: String, type: any, successCallback, failureCallback) {
    let logRequest = {
      type : this.constants.LOG_TYPE[type],
      stacktrace: message,
      location: '',
      app: this.constants.APP_NAME
    }
    this.apicallService.doPostAPIAction(this.constants.API_URL.logger, logRequest, (response) => {
      successCallback(response);
    }, (error) => {
      failureCallback(error);
    });
  }
}
