import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Issue} from './issue'

@Injectable()
export class IssueService {

  constructor(private http: Http) {}

  private headers = new Headers({'Content-Type': 'application/json'});
  
  saveIssue(issue: Issue): Promise<Issue> {
    const url = `/issues`;
    return this.http
      .post(url, JSON.stringify(issue), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Issue)
      //.catch(this.handleError);
  }
}