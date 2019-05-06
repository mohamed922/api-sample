import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path : '' , component: ContentComponent},
  {path : 'news/:id' , component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
