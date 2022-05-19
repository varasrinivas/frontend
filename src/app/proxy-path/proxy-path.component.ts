import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld.service';

@Component({
  selector: 'app-proxy-path',
  templateUrl: './proxy-path.component.html',
  styleUrls: ['./proxy-path.component.scss']
})
export class ProxyPathComponent implements OnInit {
  displayData = '';

  constructor(private service: HelloworldService){
  }
  
  ngOnInit(): void {
    this.service.getDataProxyPath().subscribe(data => {
      this.displayData = JSON.stringify(data);
    })
  }


}
