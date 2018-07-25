import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {
  private currentFilter: string = 'Time';
  private sortDirection: number = 1;

  constructor(private articleService: ArticleService) { }

  changeDirection(): void {
    this.sortDirection = this.sortDirection * -1;
    this._updateSort();
  }

  changeSort(filter: string): void {
    if (filter === this.currentFilter) {
      this.changeDirection();
    } else {
        this.currentFilter = filter;
        this._updateSort();
    }
  }

  _updateSort(): void {
    this.articleService.sortBy(this.currentFilter, this.sortDirection);
  }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

}
