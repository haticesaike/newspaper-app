import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})
 

export class NavComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

     categories: string[]=["Business","Entertainment","General","Health","Science","Sports","Technology"]

  constructor(private router: Router) { 
    
   }
   onFormSubmit(event: Event) {
    event.preventDefault();
    const searchValue = this.searchInput.nativeElement.value;
    this.router.navigate(['/search'], { queryParams: { q: searchValue } });
  }

  ngOnInit(): void {
  }
  
}