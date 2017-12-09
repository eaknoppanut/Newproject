import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private name : String;

  constructor() { 
    console.log('contructor ran...');
  }

  ngOnInit() {
    this.name = name;
    console.log('ngonInit ran...');

    }

}
