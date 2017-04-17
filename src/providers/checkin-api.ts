import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Checkin } from '../models/checkin';
/*
  Generated class for the CheckinsAPI provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CheckinsAPI {
  githubApiUrl = 'http://checkin-api.dev.cap-liberte.com';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<Checkin[]> {
    return this.http.get(`${this.githubApiUrl}/checkin`)
      .map(res => <Checkin[]>res.json());
  }
}
