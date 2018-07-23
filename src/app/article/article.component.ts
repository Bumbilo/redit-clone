import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  @Input() article;

  constructor() { }

  upVote() {
    this.article.voteUp();
  }

  downVote() {
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
