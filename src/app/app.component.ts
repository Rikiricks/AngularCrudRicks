import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<app-list-employees></app-list-employees>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud';
  showLoading = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoading = false;
      }
    });

  }
}
