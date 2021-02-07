import { Component, OnInit } from '@angular/core';
import { faHome, faChartPie, faChartBar, faCreditCard, faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faChartPie = faChartPie;
  faChartBar = faChartBar;
  faCreditCard = faCreditCard;
  faBullseye = faBullseye;


  constructor() { }

  ngOnInit(): void {
  }

}
