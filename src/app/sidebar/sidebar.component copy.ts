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

completedVideos =[]; //[ "video1", "video2"]
posts;
  constructor(private VIDEOSERVICE : VideosrcService, private service:PostService, private http:HttpClient) { }

  ngOnInit(): void {
    // this.service.getPosts().subscribe(response => {
    //       this.posts = response;
    //     });

    let resp=this.http.get("https://jsonplaceholder.typicode.com/posts");
    // resp.subscribe((data) => console.log(data));

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
    //this.videoService.$complete.subsscrobe(result =>{ this.completedVideo.push(res)})
    if(this.post_complete){
      this.run_DummyPOST(909);
    }

    // ng onit finish
  }
  // ngOnChanges(): void{
  //     console.log("ng change event started");

  // }
  onVideoOptionClick(value:any){
    this.src_of_video = value.video_src;
    this.video_details = value.video_details;
    console.log(this.src_of_video);
    this.VIDEOSERVICE.onSrcChange(this.src_of_video, this.video_details);
    // this.VIDEOSERVICE.onSrcChange(this.video_details);
   
    // return this.src_of_video;
  }
  // which video is completed (video-detail)

  videoCompletedChecker(value:any)
  {
    console.log("complted video", this.completedVideos.length);
    // var post_value=this.completedVideos.length*20;
    var post_value = 8888;
  for(var i=0; i <= this.completedVideos.length; i++)
  {
   if(this.completedVideos[i] == value)
   {
      //this.createPost(post_value);
      //this.run_DummyPOST(post_value);
      // this.post_complete=true;
    //  return this.createPost(post_value);
    let post = {"completed": post_value};
    let resp_post=this.http.post("https://jsonplaceholder.typicode.com/posts", post, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })})
                resp_post.subscribe((data) => console.log(data));
      return true;
   }
  }
  }


// createPost(input:any){
//   let post = {"completed": input}; // {"completed":40}
//   // input.value = '';

//   this.service.create(post) // create (40). subsrcibe(response => { post['completd']= resoponse } )
//     .subscribe( () => {
//       //console.log(response);
//       console.log("updating done");
//       return true;
//       // this.post_complete = true;
//       // post['completed'] = response;
//       // this.posts.splice(0,0, post);
//     });
// }
post=1;
run_DummyPOST(value:any):boolean
{
  console.log(value,this.post++);
  return true;

}}