import { Component, OnInit, OnChanges } from '@angular/core';
import {VIDEO}  from '../video';
import {Video_list} from '../video-database';
import  { VideosrcService} from '../videosrc.service';
import { PostService } from '../post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

data = Video_list;
src_of_video = "";
video_details = "";
val:number = -1;
post_complete = false;
completedVideos =[];

  constructor(private VIDEOSERVICE : VideosrcService, private service:PostService, private http:HttpClient) { }

  ngOnInit(): void {

    this.VIDEOSERVICE.$video_src.subscribe(res =>{
      this.src_of_video = res;
      console.log(this.src_of_video);
    })
    this.VIDEOSERVICE.$video_details.subscribe(res =>{
      this.video_details = res;
      
    })

    this.VIDEOSERVICE.$completed.subscribe(res => {
      this.completedVideos.push(res)
    })

    // ng onit finish
  }
  // ngOnChanges(): void{
  //     console.log("ng change event started");

  // }

  postdata()
  {
    let length=this.completedVideos.length
    console.log("length",length);
    let post_data=length*20;
    if(post_data <= 100)
    {
    let post = {"completed":post_data};
    console.log(post);
    let respP=this.service.create(post);
    console.log(respP);
    respP.subscribe((data)=>console.log(data));
    }
  }

  onVideoOptionClick(value:any){
    this.src_of_video = value.video_src;
    this.video_details = value.video_details;
    console.log(this.src_of_video);
    this.VIDEOSERVICE.onSrcChange(this.src_of_video, this.video_details);
    // this.createPost(30);
    console.log(this.completedVideos);
    this.postdata();
    // this.VIDEOSERVICE.onSrcChange(this.video_details);
   
    // return this.src_of_video;
  }
  // which video is completed (video-detail)

  videoCompletedChecker(value:any)
  {
    let length=this.completedVideos.length;
    // console.log(length);
    if(length > 1)
    {
      for (var i=1; i<=length; i++)
      {
        if(this.completedVideos[i] == value)
        {
          return true;
        }
      }
    }
  }

}