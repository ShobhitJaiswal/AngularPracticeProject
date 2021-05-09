import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  video:object;
  searchquery:string;
  constructor( private searchServ: SearchService) { }

  ngOnInit(): void {
  }
  query(val:string){
    // promisfy
    this.video = this.searchServ.search(val);
  
    console.log(this.video);
  }
}
