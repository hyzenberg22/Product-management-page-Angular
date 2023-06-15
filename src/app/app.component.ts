// imported packages
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <!-- add the products page  -->
      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
