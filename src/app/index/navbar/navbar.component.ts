import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarSupportedContent') navbarSupportedContent: ElementRef;
  private toggle: boolean;

  constructor() { }

  ngOnInit() {}

  toggleMenu() {
    return this.toggle = !this.toggle;
  }
}
