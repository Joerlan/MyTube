import { NavSection } from './nav-section/nav-section.model';
import { Component, OnInit } from '@angular/core';
import { sections } from './sidenav.config';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  navWidth: string = "240px";
  sections: NavSection[];

  constructor() { }

  ngOnInit() {
    this.sections = sections;
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
