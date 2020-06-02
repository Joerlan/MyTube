import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlists: [];
  playlistsListener: Subject<[]>;

  constructor() { }

  loadPlaylists(){
    //load playlists
    return this.playlistsListener;
  }

}
