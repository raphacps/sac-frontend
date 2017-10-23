import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatGridListModule, MatTableModule, MatListModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueFormComponent } from './issue-form.component';
import { IssueListComponent } from './issue-list.component';
import {IssueService} from './issue.service';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    IssueFormComponent,
    IssueListComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/cadastro',
        pathMatch: 'full'
      },
      {
        path: 'cadastro',
        component: IssueFormComponent
      },
      {
        path: 'consulta',
        component: IssueListComponent
      }
    ])
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

