import {NgModuleRef, enableProdMode, Type} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormWrapperConfig} from './form-wrapper-config';

export class FormWrapper {

  static APP_ROOT_ELEMENT = 'app-root';
  static initialized = false;

  private moduleRef: NgModuleRef<any>;
  config: FormWrapperConfig = {};

  constructor(private module: Type<any>) {
  }

  /**
   *
   * @param element - istniejący element DOM w którym zostanie osadzony wniosek
   * @param formName - nazwa wniosku do wyświetlenia
   * @returns {FormWrapper}
   */
  create(element: Element, formName: string): FormWrapper {
    // onetime framework initialization
    if (!FormWrapper.initialized) {
      FormWrapper.initialized = true;
      enableProdMode();
    }

    // assure only one instance on page and initialize
    if (document.getElementsByTagName(FormWrapper.APP_ROOT_ELEMENT).length > 0) {
      throw new Error('FormWrapper already exists in DOM tree');
    }
    element.appendChild(document.createElement(FormWrapper.APP_ROOT_ELEMENT));

    // store passed configuration
    this.config.formName = formName;

    // bootstrap application
    let app = platformBrowserDynamic().bootstrapModule(this.module);
    app.then(res => this.moduleRef = res);

    return this;
  }

}
