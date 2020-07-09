import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemCategories() {
    return this.http.get('/api/items/category');
  }

  getItems(page: number) {
    return this.http.get(`/api/items?page=${page.toString}`);
  }
}
