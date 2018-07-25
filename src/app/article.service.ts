import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Article } from './article.model';
import { environment } from '../environments/environment';

/*
 *[].sort(compare(a, b))
 * return value
 *  0 == tye are equal in sort
 *  1 == a comes before b
 *  -1 == b comes before a
 */
interface ArticleSortFn {
  (a: Article, b: Article): number;
}

interface ArticleSortOrderFn {
  (direction: number): ArticleSortFn;
}

const sortByTime: ArticleSortOrderFn =
  (direction: number) => (a: Article, b: Article) => {
    return direction * (b.publishedAt.getTime() - a.publishedAt.getTime());
  };

const sortByVotes: ArticleSortOrderFn =
  (direction: number) => (a: Article, b: Article) => {
    return direction * (b.votes - a.votes);
  };

const sortFns = {
  'Time': sortByTime,
  'Votes': sortByVotes,
};

@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> =
    new BehaviorSubject<Article[]>([]);

  private _source: BehaviorSubject<any> =
    new BehaviorSubject<any>([]);

  private _sortByDirectionSubject: BehaviorSubject<number> =
    new BehaviorSubject(1);
  
  private _filterBySubject: BehaviorSubject<string> =
    new BehaviorSubject('');

  private _sortByFilterSubject: BehaviorSubject<ArticleSortOrderFn> =
    new BehaviorSubject<ArticleSortOrderFn>(sortByTime);

  public articles: Observable<Article[]> = this._articles.asObservable();
  public orderedArticles: Observable<Article[]>;

  constructor(private http: HttpClient) {
    this.orderedArticles = Observable.combineLatest(
      this._articles,
      this._sortByFilterSubject,
      this._sortByDirectionSubject
    ).map(([
      articles, sorter, direction
    ]) => {
      return articles.sort(sorter(direction))
    });

  }

  public sortBy(filter: string, direction: number): void {
    console.log('sortBy work next()');
    this._sortByDirectionSubject.next(direction);
    this._sortByFilterSubject.next(sortFns[filter]);
  }

  public getArticles(): void {
    this._makeHttpRequest('/v2/everything', 'front-end')
      .map(json => json.articles)
      .subscribe(ariclesJSON => {
        const articles = ariclesJSON.map(articJSON => Article.fromJSON(articJSON));
        this._articles.next(articles)
      });
  }

  private _makeHttpRequest(path: string, sourceKey: string): Observable<any> {
    // Set query parameters
    let params = new HttpParams()
      .set('apiKey', environment.newApiKey)
      .set('q', sourceKey);
    // Return Http request
    return this.http
      .get(`${environment.baseUrl}${path}`, { params })
      .map(resp => resp)
  }
}
