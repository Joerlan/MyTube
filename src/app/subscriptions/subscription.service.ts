import { Subject } from 'rxjs';
import { Subscription } from './subscription.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptions: Subscription[] = [];
  totalSubs: number;
  private subscriptionsListener = new Subject<{subs: Subscription[], totalSubs: number}>();

  constructor(private http: HttpClient) {}

  public loadSubs(qtd?: number){
    //TODO: backend
    // if (qtd) {
    // }
    // const userId = 0;
    // this.http.get<{subs:Subscription[], count: number}>("url"+"paginationquery").subscribe((response)=>{
    //   this.subscriptions =  response.subs;
    //   this.totalSubs = response.count;
    //   this.subscriptionsListener.next({subs: this.subscriptions, totalSubs: this.totalSubs});
    // });
    console.log("SubscriptionService")
    console.log("qtd")
    console.log(qtd)
    if (!qtd) {
      qtd = 100;
    }

    setTimeout(()=>{
      const fakeSubs = new Array<Subscription>(qtd).fill({
        channel: {
          name: "fake channel",
          icon: "fake_icon",
          countSubs: 99,
          id: '1'
        },
        newVideo: false
      });
      console.log(fakeSubs);
      this.subscriptionsListener.next({subs: fakeSubs, totalSubs: 100});
    },1000);

    return this.subscriptionsListener.asObservable();

  }

  subscribeChannel(){}
  unsubscribeChannel(){}

}
