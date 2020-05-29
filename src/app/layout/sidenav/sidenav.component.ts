import { NavItemComponent } from './nav-item/nav-item.component';
import { Component, OnInit } from '@angular/core';
import { itens } from './sidenav.config';
import { NavItem } from './nav-item/nav-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  navWidth: string = "240px";
  itens: NavItem[] = itens;


  constructor() { }

  ngOnInit() {
    this.opened = true;
  }

  toggle() {
    this.opened = !this.opened;
    if(this.opened){
      this.navWidth = "240px";
    }else {
      this.navWidth = "72px";
    }
  };

}
