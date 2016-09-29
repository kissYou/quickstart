import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TestComponent} from './test.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ,TestComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
