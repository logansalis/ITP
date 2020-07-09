import { Component, OnInit, Type } from '@angular/core';
import { ItemService } from '../../item.service';

interface Type {
  categories: string[];
  total: number;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemCat: string[];
  items: object[];
  totalPages: number;
  page: number;
  filter: string;


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

  }

  getCategories() {
    this.itemService.getItemCategories().subscribe((data: Type) => {
      this.itemCat = data.categories;
      this.totalPages = Math.ceil(data.total / 50);
    });
  }

}
