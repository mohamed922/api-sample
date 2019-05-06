import { Component , EventEmitter , Output, OnInit} from '@angular/core';
import { NewsServiceService } from './service/news-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @Output() closeNav = new EventEmitter() ;
  resources: any = [];
  constructor(private newsRes: NewsServiceService , private  router: Router) {}
  ngOnInit() {
    this.newsRes.fetchData().subscribe(res => this.resources = res['sources']) ;
  }
  onSelected(id) {
   this.router.navigate(['/news', id]) ;
  }

//  closeSide() {
//    this.closeNav.emit() ;
//  }
}
