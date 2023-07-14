import { Component, OnInit } from '@angular/core'; 
import axios from 'axios'

@Component({
  selector: 'app-headcarousel',
  templateUrl: './headcarousel.component.html',
  styleUrls: ['./headcarousel.component.css']
})
export class HeadcarouselComponent implements OnInit {
  carouselItems:any

  constructor() { }

  ngOnInit() {
    axios('https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=676f017549224f488970f1835f9db971')
    .then((res)=>{
        this.carouselItems = res.data.articles.slice(-4,-1)

    }).catch((err)=>console.log(`error`,err)).finally(()=>{
      console.log(this.carouselItems);  
      
    })
    
  }

}
