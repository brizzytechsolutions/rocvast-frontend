import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showList = true; // Initial value is true to match your initial route redirection

  constructor(private router: Router) {
    this.router.events.pipe(
      // Correctly apply the filter operator to ensure the event is a NavigationEnd event
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Now that we've correctly filtered, TypeScript knows event is definitely a NavigationEnd event
      this.showList = event.urlAfterRedirects.includes('/products/list');
    });
  }
  
}
