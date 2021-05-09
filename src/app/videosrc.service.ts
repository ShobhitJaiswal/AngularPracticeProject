import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})

export class VideosrcService {
  private videosrc = new BehaviorSubject<string>("");
  private videodetail = new BehaviorSubject<string>("");
  private completed = new BehaviorSubject<string>("");

  $video_src = this.videosrc.asObservable();
  $video_details = this.videodetail.asObservable();
  $completed = this.completed.asObservable();
  constructor() { }

  onSrcChange($video_src:string,$video_details:string){
    
    this.videosrc.next($video_src); 
    this.videodetail.next($video_details);
  }

  onVideoComplete($completed:string)
  {
    this.completed.next($completed);
  }
}
