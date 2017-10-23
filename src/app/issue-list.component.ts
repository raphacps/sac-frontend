import { Component, Input, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Issue} from './issue'
import { IssueService } from './issue.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
    selector: 'issues-list',
    templateUrl: './issue-list.component.html',
    styleUrls: ['./issue-list.component.css']
})

export class IssueListComponent implements OnInit {
    
    constructor(private issueService: IssueService) {}

    issues: Issue[];
   
    dataSource: TableDataSource;
    displayedColumns = []
    
    getIssues(): void {
        this.issueService.getIssues().then(issues => {this.issues = issues; issuesToFront = this.issues; console.log(issuesToFront); 
            this.displayedColumns = ['type', 'reason','description','state', 'createdAt'];
            this.dataSource = new TableDataSource();
        });
    }

    ngOnInit(): void {
        this.getIssues();
    }
}

var issuesToFront: Issue[];

export class TableDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    
    connect(): Observable<Issue[]> {
      return Observable.of(issuesToFront);
    }
    disconnect() {}
  }
