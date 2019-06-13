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

  public log(message: String, type, successCallback, failureCallback) {
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
