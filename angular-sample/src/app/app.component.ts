import {Component, OnInit} from '@angular/core';
import {FormWrapper} from '../form-wrapper/form-wrapper';

@Component({
  selector: 'app-root',
  template: `
        <div>Demo wniosku: {{formName}}</div>
    `
})
export class AppComponent {

  private formName: string;

  constructor(formWrapper: FormWrapper) {
    this.formName = formWrapper.config.formName;
  }

}
