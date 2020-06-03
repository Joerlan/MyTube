import { Component, OnInit, Input } from '@angular/core';
import { Channel } from 'src/app/services/channels/channel.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() video: {
    title: string,
    thumbUrl: string,
    views: number,
    uploadDate: Date,
    channel: Channel
  };

  constructor() { }

  ngOnInit() {
    const fakeDate = new Date(new Date().getTime() - 100000);

    this.video = {
      title: "Fake Video",
      thumbUrl: "",
      uploadDate: fakeDate,
      views: 100000,
      channel: {
        id: "id",
        name: "Fake Channel",
        icon: null ,
        countSubs: 99,
      },
    }
  }

}
