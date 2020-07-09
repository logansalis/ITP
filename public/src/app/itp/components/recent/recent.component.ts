import { Component, OnInit } from '@angular/core';
import {ListingService} from '../../listing.service';
import {WishService} from '../../wish.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  recentListings: object[];
  recentWishes: object[];

  constructor(private listingService: ListingService, private wishService: WishService) { }

  ngOnInit(): void {
    this.getRecentListings();
    this.getRecentWishes();
  }

  getRecentListings() {
    this.listingService.getRecentListings().subscribe((data: object[]) => {
      this.recentListings = data;
    });
  }

  getRecentWishes() {
    this.wishService.getRecentWishes().subscribe((data: object[]) => {
      this.recentWishes = data;
    });
  }

}
