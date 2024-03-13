import { Component } from '@angular/core';
import { SideNavService } from '../side-nav/side-nav.service';

export interface PeriodicElement {
  type: string;
  position: number;
  amount: number;
  date: Date;
}
//date format in angular
// {{element.date | date:'yyyy-MM-dd'}}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, type: 'Credit', amount: 200, date: new Date() },
  { position: 2, type: 'Debit', amount: 400, date: new Date() },
  { position: 3, type: 'Credit', amount: 300, date: new Date() },
  { position: 4, type: 'Debit', amount: 500, date: new Date() },
  { position: 5, type: 'Debit', amount: 200, date: new Date() },
  { position: 6, type: 'Credit', amount: 700, date: new Date() },
  { position: 7, type: 'Debit', amount: 600, date: new Date() },
  { position: 8, type: 'Credit', amount: 200, date: new Date() },
  { position: 9, type: 'Credit', amount: 300, date: new Date() },
  { position: 10, type: 'Debit', amount: 100, date: new Date() },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
