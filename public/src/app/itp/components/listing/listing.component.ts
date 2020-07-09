import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../listing.service';

interface Type {
  types: string[];
  total: number;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit {
  listingTypes: string[];
  listings: object[];
  totalPages: number;
  page: number;
  filter: string;

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.page = 1;
    this.getTypes();
    this.getListings();
  }

  getListings() {
    this.filter = null;
    this.listingService.getAllListings(this.page).subscribe((data: object[]) => {
      this.listings = data;
    });
  }

  getListingsFilter(type: string) {
    this.listingService.getListingByType(this.page, type).subscribe((data: object[]) => {
      this.listings = data;
    });
  }

  getTypes() {
    this.listingService.getTypes().subscribe((data: Type) => {
      this.listingTypes = data.types;
      this.totalPages = Math.ceil(data.total / 50);

    });
  }

  onFilterClick(filter: string) {
    this.filter = filter;
    this.listingService.getListingByType(this.page, filter).subscribe((data: object[]) => {
      this.listings = data;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    if (this.filter)
    {
      this.onFilterClick(this.filter);
    }
    else {
      this.getListings();
    }

  }

}
