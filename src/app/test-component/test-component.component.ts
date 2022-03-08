import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  userData: null|any[] = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  getAllUsers(){
    // this is where you would use the javascript client to get the users
    // instead, here's test data
    this.userData = [
      {name:"Roger Staubach",id:0},
      {name:"Troy Aikman",id:1},
      {name:"Tony Romo",id:2},
      {name:"Dak Prescott", id:3}
    ]
  }
}
