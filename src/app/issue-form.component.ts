import { Component, Input} from '@angular/core';
import {Issue} from './issue'
import { IssueService } from './issue.service';

@Component({
    selector: 'issue-form',
    templateUrl: './issue-form.component.html',
    styleUrls: ['./issue-form.component.css']
})

export class IssueFormComponent {

    constructor(private issueService: IssueService) {}

    issues: Issue[];

    issue: Issue = {
        description: "",
        state: "",
        type: "",
        reason: "",
        createdAt: ""
    }   

    saveIssue(): void {
        this.issueService.saveIssue(this.issue)
        this.clearIssue();
    }
    
    clearIssue(): void {
        this.issue = {
            description: "",
            state: "",
            type: "",
            reason: "",
            createdAt: ""
        } 
    }
}