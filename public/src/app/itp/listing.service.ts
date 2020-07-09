import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getRecentListings(){
    return this.http.get('/api/listings/recent');
  }

  getAllListings(page: number) {
    if (page !== 0) {return this.http.get(`/api/listings?page=${page.toString}`); }

    return this.http.get('/api/listings');
  }

  getUserListings(page: number, id: string) {
    return this.http.get(`/api/listings/seller/${id}?page=${page.toString}`);
  }

  getListingsByItem(page: number, id: string) {
    return this.http.get(`/api/listings/item/${id}?page=${page.toString}`);
  }

  getListingByType(page: number, type: string) {
    return this.http.get(`/api/listings/type/${type}?pagr=${page.toString}`);
  }

  getTypes() {
    return this.http.get('/api/listings/type');
  }

  createListing(listing: object) {
    return this.http.post('/api/listings/new', listing);
  }

  deleteListing(id: string) {
    return this.http.delete(`/api/listings/${id}`);
  }
}


