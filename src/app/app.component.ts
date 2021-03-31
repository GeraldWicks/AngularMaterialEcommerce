import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-demo';
  items = this.cartService.items;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  onChange()
  {
    console.log("hey there !");
  }

}
