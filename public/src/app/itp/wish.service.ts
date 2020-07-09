import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  getRecentWishes() {
    return this.http.get('/api/wishes/recent');
  }

  getAllWishes() {
    return this.http.get('/api/wishes');
  }

  getWishByItem(id: string) {
    return this.http.get(`/api/wishes/item/${id}`);
  }

  getWishByUser(id: string) {
    return this.http.get(`/api/wishes/user/${id}`);
  }

  getWishByType(type: string) {
    return this.http.get(`/api/wishes/type/${type}`);
  }

  getTypes() {
    return this.http.get('/api/wishes/type');
  }

  createWish(wish: object) {
    return this.http.post('/api/wishes/new', wish);
  }

  deleteWish(id: string) {
    return this.http.delete(`/api/wishes/${id}`);
  }
}
