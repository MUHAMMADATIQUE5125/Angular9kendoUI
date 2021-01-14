import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

  public items: BreadCrumbItem[] = [
      {
          text: 'Home',
          title: 'Home',
          icon: 'home'
      },
      {
          text: 'Products',
          title: 'Products'
      },
      {
          text: 'Computer peripherals',
          title: 'Computer peripherals'
      },
      {
          text: 'Keyboards',
          title: 'Keyboards'
      },
      {
          text: 'Gaming keyboards',
          title: 'Gaming keyboards'
      }
  ];
}
