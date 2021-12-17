import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlEditorComponent implements OnInit {

  constructor() { }
  @Input() isRtl:boolean=false;
  htmlContent='';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',    
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      []
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },{
        name: "mainHeader",
        class: "mainHeader",
        tag: "h1",
      },
    ]
  };
  ngOnInit(): void {
  }

}
