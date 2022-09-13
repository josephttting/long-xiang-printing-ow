import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  breakpoint: number = 2;
  infoRowHeight: number = 240;

  constructor() { }

  ngOnInit(): void {
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 1280) ? 1 : 2;
  }
}
