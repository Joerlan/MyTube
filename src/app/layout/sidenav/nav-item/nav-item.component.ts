import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input() title: string;
  @Input() displaySimple: boolean;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
    this.title = this.title || "Empty Title";
    this.displaySimple = this.displaySimple || false;
    this.icon = this.icon || "no_icon_path";
  }

}
