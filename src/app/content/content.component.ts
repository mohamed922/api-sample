import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  artic: any;

  constructor(private articles : NewsServiceService) { }

  ngOnInit() {
    this.articles.articles().subscribe(res => this.artic = res['articles'])
  }

}
