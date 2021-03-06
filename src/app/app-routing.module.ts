import { DirectCallComponent } from './direct-call/direct-call.component';
import { IngressPathComponent } from './ingress-path/ingress-path.component';
import { ProxyPathComponent } from './proxy-path/proxy-path.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot([
    {path: 'direct-call', component: DirectCallComponent},
    {path: 'proxy-path', component: ProxyPathComponent},
    {path: 'ingress-path', component: IngressPathComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
