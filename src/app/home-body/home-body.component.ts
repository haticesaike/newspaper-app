import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {
  loopFour:any=[1,2,3,4]
  loopThree:any=[1,2,3]
  loopSix:any=[1,2,3,4,5,6]
  editorsPicks:any=[]
  editorPickFirst:any
  editorPick:any
  trends:any=[]
  sports:any=[]
  business:any=[]
  recent:any=[]
  popular:any=[]


  constructor() { }

  ngOnInit() {
    axios('https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=ea33ea75299145b6bce22e598b83bdea')
    .then((res)=>{
        this.editorsPicks = res.data.articles.slice(-4,-1)
        this.editorPickFirst = res.data.articles[5]
        this.editorPick = res.data.articles[0]
        this.trends=res.data.articles.slice(0,3)
        this.popular=res.data.articles.slice(5,11)



    }).catch((err)=>console.log(`error`,err)).finally(()=>{
      console.log(this.editorsPicks);
      console.log(this.editorPickFirst);   
      
    })

    

    axios('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ea33ea75299145b6bce22e598b83bdea')
    .then((res)=>{
      this.sports=res.data.articles.slice(0,3)
    }).catch((err)=>console.log(`error`,err)).finally(()=>{
      console.log(this.sports);
  })
  axios('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ea33ea75299145b6bce22e598b83bdea')
   .then((res)=>{
    this.business=res.data.articles.slice(0,3)
  }).catch((err)=>console.log(`error`,err)).finally(()=>{
    console.log(this.business);
  })

  axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=ea33ea75299145b6bce22e598b83bdea').then(
    (res)=>{
      this.recent=res.data.articles.slice(0,4)
    }).catch((err)=>console.log(`error`,err)).finally(()=>{
      console.log(this.recent);
    })
    
  }
}
