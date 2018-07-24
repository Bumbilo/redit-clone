import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://newsapi.org';
const newApiKey = '9cee674a9c414560a66ca702323a1ac0';

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(): Promise<Article[]> {
    let params = new HttpParams()
                    .set('apiKey', newApiKey)
                    .set('q', 'apple');

      return this.http
              .get(`${baseUrl}/v2/everything`, { params })
              .toPromise()
              .then(resp => resp.articles)
              .then(articles => articles.map((article) => Article.fromJSON(article)))
              .catch(err => console.log(err))
  }

}
