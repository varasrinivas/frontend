import { HelloworldService } from './helloworld.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayData = '';
  title = 'frontend';

  constructor(private service: HelloworldService){
  }
  
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.displayData = JSON.stringify(data);
    })
  }

  
}

