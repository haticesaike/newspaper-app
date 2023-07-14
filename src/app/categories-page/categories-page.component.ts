import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  id!: string
  
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
     this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id = params.get('id')!

        }
          )
       }
  }
