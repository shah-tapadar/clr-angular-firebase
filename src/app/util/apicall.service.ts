import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class ApicallService {

    constructor(
        public http: Http,
    ) { }

    /**
     * @desc generate the request headers for the token authentication
     * @param flag
     * Note: Here we add the session token and LTPA token
     */
    generateHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    /**
     * @desc Http service call for GET method
     * @param {string} apiUrl api url
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doGetAPIAction(apiUrl, successCallback, failureCallback) {
        const _headers = this.generateHeaders();
        const options = { headers: _headers};
        this.http
            .get(apiUrl, options)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }


    /**
     * @desc Http service call for POST method
     * @param {string} apiUrl api url
     * @param {Object} data the data to be posted to the api
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doPostAPIAction(apiUrl, data, successCallback, failureCallback) {
        const _headers = this.generateHeaders();
        const options = { headers: _headers};
        this.http
            .post(apiUrl, data, options)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }

    /**
     * @desc Http service call for PUT method
     * @param {string} apiUrl api url
     * @param {Object} data the data to be posted to the api
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doPutAPIAction(apiUrl, data, successCallback, failureCallback) {
        const _headers = this.generateHeaders();
        const options = { headers: _headers};
        this.http
            .put(apiUrl, data, options)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }




    /**
     * @desc Http service call for DELETE method
     * @param {string} apiUrl api url
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doDeleteAPIAction(apiUrl, successCallback, failureCallback) {
        const _headers = this.generateHeaders();
        const options = { headers: _headers};
        this.http
            .delete(apiUrl, options)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }
}
