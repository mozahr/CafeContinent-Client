import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CafeContinent';
  addPadding = true;
  /**
   *
   */
  constructor(private _router: Router) {

    _router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event:any) => {
        this.addPadding = event.url !== '/';
      });
  }
}
