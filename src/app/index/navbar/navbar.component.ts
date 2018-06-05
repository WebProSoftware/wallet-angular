import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarSupportedContent') navbarSupportedContent: ElementRef;

  private toggle: boolean;
  private resizeNavbar: boolean;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = () : void => {
    this.resizeNavbar = window.pageYOffset > 200;
  };

  toggleMenu() {
    return this.toggle = !this.toggle;
  }
}
