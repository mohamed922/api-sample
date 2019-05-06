import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }
  fetchData() {
    return this.http.get('https://newsapi.org/v2/sources?' +
    'country=us&' +
    'apiKey=d0c4979d0ff8437eae7d430fe51e8a65') ;
  }
  articles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=d0c4979d0ff8437eae7d430fe51e8a65') ;
  }
  //  sideMenu() {
  //    return this.http.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=d0c4979d0ff8437eae7d430fe51e8a65') ;
  // }
  newsByName(id) {
    return this.http.get('https://newsapi.org/v1/articles?source='
    +id+'&sortBy=top&apiKey=d0c4979d0ff8437eae7d430fe51e8a65') ;
  }
}
