import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {
  private currentFilter: string = 'Time';
  private sortDerection: number = 1;

  constructor() { }

  changeDirection() {
    this.sortDerection = this.sortDerection * -1;
    this._updateSort()
  }

  changeSort(filter: string) {
    if (filter === this.currentFilter) {
      this.changeDirection();
    } else {
        this.currentFilter = filter;
        this._updateSort();
    }
  }

  _updateSort() {
    // call sortBy on the article service
  }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

}
