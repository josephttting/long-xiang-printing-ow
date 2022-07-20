import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  breakpoint: number = 2;
  infoRowHeight: number = 240;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1280) ? 1 : 2;
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 1280) ? 1 : 2;
  }
}
