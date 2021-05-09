import { Injectable } from '@angular/core';
import {VIDEO} from './video';
import {Video_list} from './video-database';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  i:number;
  videos = Video_list;
  constructor() { }

  search(query:string){
    console.log(query);
    // logic 
    for ( this.i =0; this.i<=this.videos.length;this.i++){
      if ( query == this.videos[this.i].video_details){
        console.log("found in search --- service");
        return this.videos[this.i];
      }
    }
  }
}
