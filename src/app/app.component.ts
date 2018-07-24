import { Component } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [
      new Article('The Angular 2 screencast', 'The easiest way to learn Angular 2', 10),
      new Article('Real React', 'React 6', 3),
      new Article('View', 'I dont know view', 2),
    ];
  }
}
