import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  isShop: Boolean;
  isEShop: Boolean;
  constructor(private _router: Router) {
    _router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        this.isShop = event.url === '/shop';
        this.isEShop = event.url === '/e-shop';
      });


  }

  ngOnInit(): void {
  }

}
