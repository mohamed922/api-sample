import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';
import {MatPaginator, MatTableDataSource , MatSort} from '@angular/material' ;
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator : MatPaginator ;
  @ViewChild(MatSort) sort: MatSort;
  mydataSource;
  id;
  displayedColumns = ['name','url','description'] ;
 
  constructor(private businessServ: NewsServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
     const source  = params.get('id') ;
     this.id = source ;
     this.businessServ.newsByName(this.id).subscribe(data => {
      this.mydataSource = new MatTableDataSource(data['articles']) ;
      this.mydataSource.paginator = this.paginator ;
      this.mydataSource.sort = this.sort ;
    }) ;
    }) ;

  }
  filterName(filterName: string) {
     filterName = filterName.trim() ;
     filterName = filterName.toLowerCase() ;
     this.mydataSource.filter = filterName ;
  }
search(name : HTMLInputElement) {
  this.filterName(name.value) ;
}
}
