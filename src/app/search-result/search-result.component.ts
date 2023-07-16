import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnChanges {
  q!: string;
  content: any;
  popular: any[] = [];
  categoryContents: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['q']) {
      this.fetchSearchContents();
    }
  }

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
      this.q = params['q'];
      console.log('Arama sorgusu:', this.q);
      this.fetchSearchContents();
      this.fetchContent()
      this.fetchPopular()
    });
  }

  fetchContent(): void {
    const apiKey = 'ea33ea75299145b6bce22e598b83bdea';
    const contentUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=categories&apiKey=${apiKey}`;

    axios.get(contentUrl)
      .then((res) => {
        this.content = res.data.articles.slice(-4, -1);
        console.log(this.content)
      })
      .catch((err) => console.log('error', err))
      
    }
    
    fetchPopular(): void {
    const apiKey = 'ea33ea75299145b6bce22e598b83bdea';
    const popularUrl = `https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=${apiKey}`;

    axios.get(popularUrl)
      .then((res) => {
        this.popular = res.data.articles.slice(5, 11);
      })
      .catch((err) => console.log('error', err))
  }

  fetchSearchContents(): void {
    const apiKey = 'ea33ea75299145b6bce22e598b83bdea';
    const categoryUrl = `https://newsapi.org/v2/everything?q=${this.q.toLowerCase()}&apiKey=${apiKey}`;

    axios.get(categoryUrl)
      .then((res) => {
        this.categoryContents = res.data.articles.slice(0, 4);
        console.log(res.data);
        
      })
      .catch((err) => console.log('error', err))
  }
}
