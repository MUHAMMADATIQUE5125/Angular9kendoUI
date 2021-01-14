import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { products } from './product';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css'],
 
})
export class KendoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public gridData: any[] = products;
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }
}
