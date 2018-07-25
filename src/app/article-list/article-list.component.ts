import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  private articles: Observable<Article[]>;

  constructor(
    private articleService: ArticleService
  ) {
    this.articles = articleService.orderedArticles;
  }

  ngOnInit() {
    this.articleService.getArticles();
  }

}
