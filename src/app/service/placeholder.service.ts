import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private url = "https://jsonplaceholder.typicode.com/todos/1"

  constructor(private http: HttpClient) { }

  // Return one article
  getArticle() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
