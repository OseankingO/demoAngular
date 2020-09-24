import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { LogInputDirective } from './directives/LogInputDirective'
import { PostComponentComponent } from './post-component/post-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    LogInputDirective,
    
    PostComponentComponent,
    
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
