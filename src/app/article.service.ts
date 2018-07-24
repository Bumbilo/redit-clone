import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Article } from './article.model';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(): Promise<Article[]> {
    let params = new HttpParams()
                    .set('apiKey', environment.newApiKey)
                    .set('q', 'apple');

      return this.http
              .get(`${environment.baseUrl}/v2/everything`, { params })
              .toPromise()
              .then((resp: Response) => resp.articles)
              .then((articles) => articles.map((article) => Article.fromJSON(article)))
              .catch((err: Error) => console.log(err))
  }

}
