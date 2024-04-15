import { Component } from '@angular/core';

interface Navigation {
  name: string,
  link: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  title: string = 'e-shop';
  navigation: Navigation[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About Us',
      link: '/about-us'
    }
  ];
  cartImage: string = './../assets/images/cart-shopping-svgrepo-com.svg'
}
