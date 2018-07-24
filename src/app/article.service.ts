import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Promise<Article[]> {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            new Article('The Angular 2 screencast', 'The easiest way to learn Angular 2', 10),
            new Article('Real React', 'React 6', 6),
            new Article('View', 'I dont know view', 2),
            new Article('Learn Jquery', 'Jquery not 6', 3),
            new Article('Underscore', 'I dont know Underscore', 4),
            new Article('Real Life is good', 'Good is good like this', 3),
            new Article('View is not a good', 'asdlfnow view', 1),
        ]);
      }, 2000);
    });
  }
}
