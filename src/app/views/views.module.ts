import { VideoCardComponent } from './home-view/video-card/video-card.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewsComponent,
    HomeViewComponent,
    VideoCardComponent
  ]
})
export class ViewsModule { }
