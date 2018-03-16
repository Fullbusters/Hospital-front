import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { CommentComponent } from './comment/comment.component';
import { LiPatientComponent } from './li-patient/li-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UpdateCommentComponent,
    CommentComponent,
    LiPatientComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
