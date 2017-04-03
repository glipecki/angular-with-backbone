import {Component} from '@angular/core';
import {FormWrapper} from '../form-wrapper/form-wrapper';

@Component({
  selector: '[app-root]',
  template: `
        <div>Demo wniosku: {{formName}}</div>
        <div><button (click)="demoEvent()">Demo event</button> </div>
    `
})
export class AppComponent {

  formName: string;

  constructor(private formWrapper: FormWrapper) {
    this.formName = formWrapper.config.formName;
  }

  demoEvent() {
    this.formWrapper.event('demo', {
      form: this.formName
    });
  }

}
