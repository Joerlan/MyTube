import { Channel } from '../channels/channel.model';

export class Subscription {
  channel: Channel;
  //field used to indicate that the channel has new videos
  newVideo: boolean;
}
