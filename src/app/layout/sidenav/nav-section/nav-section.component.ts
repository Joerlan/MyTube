import { NavItem } from './../nav-item/nav-item.model';
import { NavSection } from './nav-section.model';
import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.css']
})
export class NavSectionComponent implements OnInit {

  @Input() section: NavSection;

  navItens: NavItem[];
  loadedItens: NavItem[] = [];
  lazyCount: number;

  showMoreItem: NavItem;

  showLessItem: NavItem;

  constructor(private injector: Injector) { }

  ngOnInit() {
    //fixedItens will always be displayed
    this.navItens = [...this.section.fixedItens];

    let loadSize = this.section.qtdInitialDisplay;
    if (loadSize && loadSize > 0){
      this.navItens.push(...new Array(loadSize));
      console.log("NavSectionComponent this.navItens->");
      console.log(this.navItens);
    }else {
      loadSize = 0;
    }
    this.loadItens(loadSize);

    this.showLessItem = {
      name: "Show less",
      iconName: "arrow_up",
      hasSimpleDisplay: false,
      route: "#"
    }
  }

  loadItens(loadSize?: number){
    if(this.section.sectionService){
      console.log("bbb");
      if (!this.lazyCount || this.loadedItens.length < this.lazyCount){
        const service = this.injector.get(this.section.sectionService);
        console.log(loadSize);
        service.loadItens(loadSize).subscribe(data => {

          this.loadedItens = [...data.itens];
          this.lazyCount = data.total;
          this.navItens = [...this.section.fixedItens, ...this.loadedItens];
          this.showMoreItem = {
            name: "Show "+(this.lazyCount-this.section.qtdInitialDisplay)+" more",
            iconName: "arrow_down",
            hasSimpleDisplay: false,
            route: "#"
          }
        });
      }else{
        this.navItens = [...this.section.fixedItens, ...this.loadedItens];
      }
    }
  }

  onShowMore(){
    this.loadItens();
  }

  onShowLess(){
    this.navItens = [...this.section.fixedItens, ...this.loadedItens.slice(0,this.section.qtdInitialDisplay)];
  }


}
