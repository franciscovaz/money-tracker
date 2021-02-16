import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faMoneyCheckAlt, faCar, faShoppingCart, faUtensils, faGasPump } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faCar = faCar;
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  faGasPump = faGasPump;

  constructor() { }

  ngOnInit(): void {


  }

}
