import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnChanges {
  id!: string;
  content: any;
  popular: any[] = [];
  categoryContents: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] ) {
      this.fetchCategoryContents();
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!;
      this.fetchContent();
      this.fetchPopular();
      this.fetchCategoryContents();
    });
  }

  fetchContent(): void {
    const apiKey = '7ed7bc61f3034ba9b6369af3f2793e69';
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

  fetchCategoryContents(): void {
    const apiKey = 'ea33ea75299145b6bce22e598b83bdea';
    const categoryUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.id.toLowerCase()}&apiKey=${apiKey}`;

    axios.get(categoryUrl)
      .then((res) => {
        this.categoryContents = res.data.articles.slice(0, 4);
      })
      .catch((err) => console.log('error', err))
  }
}
