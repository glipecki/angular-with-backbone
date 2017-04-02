import {AppModule} from './app/app.module';
import {FormWrapper} from './form-wrapper/form-wrapper';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

window['FormWrapper'] = new FormWrapper(AppModule);
if (typeof window['formsScriptLoaded'] === 'function') {
  window['formsScriptLoaded']();
} else {
  window['formsScriptLoaded'] = true;
}

if (window['standalone-forms']) {
  // just to trick AoT compiler
  platformBrowserDynamic().bootstrapModule(AppModule);
}
