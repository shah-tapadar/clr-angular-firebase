import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class Constants {

    public APP_NAME = 'LaureateCLR APP'
    public API_URL = {
        logger: 'https://us-central1-my-awesome-project-4ec4b.cloudfunctions.net/loggingFunction',
    }

    public LOG_TYPE = {
        "error": 'ERROR',
        "debug": 'DEBUG',
        "info": 'INFO'
    }
}