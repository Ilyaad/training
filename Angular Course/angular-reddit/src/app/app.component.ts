import { Component } from '@angular/core';
import { Article } from '../app/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor(){

    this.articles = [new Article('test', 'test', 10), new Article('test', 'test', 11), ];

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 80));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
