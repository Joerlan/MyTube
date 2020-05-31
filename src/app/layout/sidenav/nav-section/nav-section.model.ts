import { SectionService } from '../section-service';
import { NavItem } from '../nav-item/nav-item.model';
import { Type } from '@angular/core';

export class NavSection {
  name: string;
  title?: string;
  fixedItens: NavItem[];
  qtdInitialDisplay?: number = 0;
  sectionService?: Type<SectionService>
}
