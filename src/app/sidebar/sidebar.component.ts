import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private soruces: Observable<any>;
  constructor(
    private articleService: ArticleService
  ) {
    this.soruces = this.articleService.sources;
  }

  ngOnInit() {
  }

}
