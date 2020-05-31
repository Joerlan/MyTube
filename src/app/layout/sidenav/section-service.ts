import { NavItem } from './nav-item/nav-item.model';
import { Observable } from 'rxjs';
export interface SectionService {
  loadItens(qtd: number): Observable<{itens: NavItem[], total:number}>;
}
