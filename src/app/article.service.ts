import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Article } from './article.model';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> =
  new BehaviorSubject<Article[]>([]);

  public articles: Observable<Article[]> = this._articles.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(): void {
    this._makeHttpRequest('/v2/everything', 'angular')
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
