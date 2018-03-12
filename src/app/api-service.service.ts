import {Injectable, EventEmitter, Output} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiServiceService {

  constructor(private http: Http) { }
  location() {
    return this.http.get('./../assets/catalog.json')
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: any) => {
            return Observable.throw(error.json() || 'Server error');
        });
  }

}
