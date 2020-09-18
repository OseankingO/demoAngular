import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { LogInputDirective } from './directives/LogInputDirective'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    LogInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
