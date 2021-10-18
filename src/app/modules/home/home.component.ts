import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faPlusCircle, faMoneyCheckAlt, faCar, faShoppingCart, faUtensils, faGasPump, faChartLine, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

export interface PeriodicElement {
  category: string;
  description: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { category: 'Vehicle', description: 'get new moto', value: '- 3000.5€' },
  { category: 'Salary', description: 'One more', value: '+ 9999.5€' },
  { category: 'Vehicle', description: 'New front tires', value: '- 120€' },
  { category: 'Fuel', description: 'Car petrol', value: '- 40€' },
  { category: 'Fuel', description: 'Moto Gasoline', value: '- 20€' },

];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  faPlusCircle = faPlusCircle;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faCar = faCar;
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  faGasPump = faGasPump;
  faChartLine = faChartLine;
  faMotorcycle = faMotorcycle;

  constructor() { }

  displayedColumns: string[] = ['category', 'description', 'value'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

}
