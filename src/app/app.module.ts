import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { IssueFormComponent }  from './issue-form.component';
import { IssueService } from './issue.service';
import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    IssueFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
