import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://7l9roqwzxk.execute-api.ap-south-1.amazonaws.com/default/TQ-Courses-Comp-ID';
  private url2 = 'https://0k0vopi6t8.execute-api.ap-south-1.amazonaws.com/default/TQ-Courses-Comp-IDV2';
  // private url2 ='https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url2);
  }

  create(post){
    return this.httpClient.post(this.url2,JSON.stringify(post));
  }

}

