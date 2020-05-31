import { map } from 'rxjs/operators';
import { SubscriptionService } from '../../subscriptions/subscription.service';
import { SectionService } from './section-service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SectionSubscriptionService implements SectionService{

  constructor(private subscriptionService: SubscriptionService){}

  loadItens(qtd: number) {
    return this.subscriptionService.loadSubs(qtd).pipe(
      map((data) => {
        return {
          itens: data.subs.map(sub=>{
            return {
              name: sub.channel.name,
              iconName: sub.channel.icon,
              hasSimpleDisplay: false,
              route: "/channel/"+ sub.channel.id
            }
          }),
          total: data.totalSubs
        }
      })
    );
  }
}
