import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld.service';

@Component({
  selector: 'app-ingress-path',
  templateUrl: './ingress-path.component.html',
  styleUrls: ['./ingress-path.component.scss']
})
export class IngressPathComponent implements OnInit {
  displayData = '';

  constructor(private service: HelloworldService){
  }
  
  ngOnInit(): void {
    this.service.getDataIngress().subscribe(data => {
      this.displayData = JSON.stringify(data);
    })
  }
}
