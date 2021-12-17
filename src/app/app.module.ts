import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, AngularEditorModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
