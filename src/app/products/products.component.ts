import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  breakpoint: number = 3;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 961) ? 1 : 3;
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 961) ? 1 : 3;
  }

}
