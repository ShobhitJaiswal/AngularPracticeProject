import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
course_src="../../assets/course1.jpg";
course_completion;
  constructor(private service:PostService, private http:HttpClient) { }

  ngOnInit(): void {
    this.course_src="../../assets/course1.jpg";
    this.service.getPosts().subscribe(response => {
      this.course_completion=response["Item"]["course_completed"];
      console.log(this.course_completion);

    });
  }

}
