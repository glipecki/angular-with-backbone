import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormWrapper} from '../form-wrapper/form-wrapper';

export function formWrapperFactory() {
  return window['FormWrapper'];
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: FormWrapper, useFactory: formWrapperFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
