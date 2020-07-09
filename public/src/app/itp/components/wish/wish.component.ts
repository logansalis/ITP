import { Component, OnInit } from '@angular/core';
import { WishService } from '../../wish.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {
  wishTypes: string[];
  wishes: object[];

  constructor(private wishService: WishService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTypes();
    this.getWishes();
  }

  getWishes() {
    this.wishService.getAllWishes().subscribe((data: object[]) => {
      this.wishes = data;
    });
  }

  getWishesFilter(type: string) {
    this.wishService.getWishByType(type).subscribe((data: object[]) => {
      this.wishes = data;
    });
  }

  getTypes() {
    this.wishService.getTypes().subscribe((data: string[]) => {
      this.wishTypes = data;
    });
  }

  onFilterClick(filter: string) {
    this.wishService.getWishByType(filter).subscribe((data: object[]) => {
      this.wishes = data;
    });
  }

}
