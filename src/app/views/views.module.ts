import { AngularMaterialModule } from './../material/angular-material.module';
import { VideoImgComponent } from './home-view/video-card/video-img/video-img.component';
import { VideoCardComponent } from './home-view/video-card/video-card.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  declarations: [
    ViewsComponent,
    HomeViewComponent,
    VideoCardComponent,
    VideoImgComponent

  ]
})
export class ViewsModule { }
