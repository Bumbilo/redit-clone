import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { ArticleService } from './article.service';
import { ArticleListHeaderComponent } from './article-list-header/article-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleListHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
