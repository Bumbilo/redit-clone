import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
