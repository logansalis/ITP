import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItpRoutingModule } from './itp-routing.module';
import { UserComponent } from './components/user/user.component';
import { ItpShellComponent } from './container/itp-shell/itp-shell.component';
import { RecentComponent } from './components/recent/recent.component';
import { ListingComponent } from './components/listing/listing.component';
import { WishComponent } from './components/wish/wish.component';
import { ItemComponent } from './components/item/item.component';
import { ListingService } from './listing.service';
import { WishService } from './wish.service';

@NgModule({
  declarations: [
    UserComponent,
    ItpShellComponent,
    RecentComponent,
    ListingComponent,
    WishComponent,
    ItemComponent,
  ],
  imports: [CommonModule, ItpRoutingModule, HttpClientModule],
  providers: [ListingService, WishService],
})
export class ItpModule {}
