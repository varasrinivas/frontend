import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http: HttpClient){}

  getData():Observable<any>{
    console.log('getData called ++++++++++++');
    return this.http.get('http://backend-service.default.svc.cluster.local:3000');
  }

  getDataProxyPath():Observable<any>{
    console.log('getDataProxyPath called ++++++++++++');
    return this.http.get('/api');
  }

  getDataIngress():Observable<any>{
    console.log('getDataIngress called ++++++++++++');
    return this.http.get('http://23.99.197.82');
  }
}
