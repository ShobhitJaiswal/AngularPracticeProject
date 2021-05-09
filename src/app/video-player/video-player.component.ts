import { Component, OnDestroy, OnInit } from '@angular/core';
import { from } from 'rxjs';
// import {VIDEO}  from '../video';
// import {Video_list} from '../video-database';
import {SidebarComponent} from '../sidebar/sidebar.component';
import { VideosrcService} from '../videosrc.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  // data = Video_list;
  video_src = "";
  video_details = "";
  // val:number = -1;

  constructor( private VIDEOSERVICE : VideosrcService) { }

  ngOnInit(): void {
    this.VIDEOSERVICE.$video_src.subscribe(res =>{
      this.video_src = res;
      console.log("showing from video",this.video_src);
    })
    this.VIDEOSERVICE.$video_details.subscribe(res =>{
      this.video_details = res;
    })
    // var SidebarComponentobject=new SidebarComponent();
    // console.log(SidebarComponentobject.src_of_video);
    // this.video_src=SidebarComponentobject.src_of_video;
    // console.log("in video component",this.video_src);

  }
  // onVideoOptionClick(value:any){
  //  this.src_of_video = value.video_src;
  //  console.log(this.src_of_video);
  // }
  vid(){
    console.log("ended");
    this.VIDEOSERVICE.onVideoComplete(this.video_details);
    // video completed pushed
  }

}
