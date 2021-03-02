import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  addPadding = true;
  constructor(private _router: Router) {

    _router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event:any) => {

        this.addPadding = event.url !== '/';
      });
  }

  ngOnInit(): void {
  }

}
