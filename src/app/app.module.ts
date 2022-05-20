import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProxyPathComponent } from './proxy-path/proxy-path.component';
import { IngressPathComponent } from './ingress-path/ingress-path.component';

@NgModule({
  declarations: [
    AppComponent,
    ProxyPathComponent,
    IngressPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
