import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPosts: any[];

  constructor(private postsService: PostsService) {
    
  }

  ngOnInit() {
    this.postsService.getAll()
      .then(posts => this.arrPosts = posts)
      .catch(error => console.log(error));
  }
}
