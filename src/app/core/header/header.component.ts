import { Component, OnInit } from '@angular/core';
import { faHome, faChartPie, faChartBar, faCreditCard, faBullseye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
  faSignOutAlt = faSignOutAlt;

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  logout(): void {
    console.log('[logout]');
    
  }

}
