import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-itp-shell',
  templateUrl: './itp-shell.component.html',
  styleUrls: ['./itp-shell.component.scss']
})
export class ItpShellComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  categories: [];

  ngOnInit(): void {
    this.getItemCategories();
  }

  getItemCategories() {
    this.itemService.getItemCategories().subscribe((data: []) => {
      this.categories = data;
      console.log(data)
    });
  }

}
