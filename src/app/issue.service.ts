import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Issue} from './issue'

@Injectable()
export class IssueService {

  private commandUrl = `/sac-command/issues`;
  private queryUrl = `/sac-query/issues`;

  constructor(private http: Http) {}
  private headers = new Headers({'Content-Type': 'application/json'});
  
  saveIssue(issue: Issue): void {
    console.log(Issue);
    
    let issueJson = JSON.stringify(issue);
    console.info("cadastrando " + issueJson);
    this.http
      .post(this.commandUrl, issueJson, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  getIssues(): Promise<Issue[]> {
    return this.http.get(this.queryUrl)
    .toPromise()
    .then(response => response.json() as Issue[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}