import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld.service';

@Component({
  selector: 'app-direct-call',
  templateUrl: './direct-call.component.html',
  styleUrls: ['./direct-call.component.scss']
})
export class DirectCallComponent implements OnInit {
  displayData = '';

  constructor(private service: HelloworldService){
  }
  
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.displayData = JSON.stringify(data);
    })
  }

  showData(): void {
    this.service.getData().subscribe(data => {
      this.displayData = JSON.stringify(data);
    })
  }

}
