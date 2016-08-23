import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class GetReportService {
    token: string;
    constructor(private router: Router, private http: Http) { }

    header = "Authorization=Bearer " + localStorage.getItem('access_token');

    getReport() {
        // console.log(1);
        return this.http.get('http://192.168.11.6:3011/breeze/report/Reports',
            {
                headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
            })
            .map((res: any) => {
                let data = res.json();
                //this.token = data.token;
                if (res) console.log('Success');
            });
    }
}

