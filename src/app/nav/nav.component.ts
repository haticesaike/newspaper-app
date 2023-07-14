import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
 

export class NavComponent implements OnInit {

     categories: string[]=["Business","Entertainment","General","Health","Science","Sports","Technology"]

  constructor() { 
    
   }

  ngOnInit(): void {
  }
  
}