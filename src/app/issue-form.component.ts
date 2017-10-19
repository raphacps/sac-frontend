import { Component, Input } from '@angular/core';
import {Issue} from './issue'
import { IssueService } from './issue.service';

@Component({
    selector: 'issue-form',
    templateUrl: './issue.form.component.html',
})

export class IssueFormComponent {
    constructor(private issueService: IssueService) { }

    saveIssue(issue: Issue): void {
        this.issueService.saveIssue(issue);
    }
}