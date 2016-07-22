import { Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

import {ReqBody} from './reqBody';

@Injectable()
export class LoginService {
    private loggedIn = false;
    constructor(public router: Router, public http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    reqBody: ReqBody;
    urlServer: string = 'http://192.168.11.6:3009/token';


    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body: string = 'grant_type: password' + 'username: ' + this.reqBody.username + 'password' + this.reqBody.password + 'client_id: webapp';
        return this.http
            .post(
            this.urlServer,
            JSON.stringify(body),
            { headers }
            )
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }

                return res.success;
            });

    }
    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }
}

