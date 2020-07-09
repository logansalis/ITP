import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { RecentComponent } from './components/recent/recent.component';
import { ListingComponent } from './components/listing/listing.component';
import { WishComponent } from './components/wish/wish.component';
import { UserComponent } from './components/user/user.component';
import { ItpShellComponent } from './container/itp-shell/itp-shell.component';


const routes: Routes = [
  {path: '', component: ItpShellComponent, children: [
    {path: '', component: RecentComponent},
    {path: 'Listings', component: ListingComponent},
    {path: 'Listings/:type', component: ListingComponent},
    {path: 'Wishes', component: WishComponent},
    {path: 'Items', component: ItemComponent},
    {path: 'Items/Category/:category', component: ItemComponent},
    {path: 'Items/:type', component: ItemComponent},
    {path: 'User/:name', component: UserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItpRoutingModule { }
