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

  async onClick(id: number){
    try {
    const post = await this.postsService.getById(id);
    console.log(post);
    }
    catch(error) {
      console.log(error);
    }
  }

  onClickPost() {
    this.postsService.create({
      title: 'Nuevo Post',
      body: 'Body del nuevo Post',
      userId: 22
    }).then(response => console.log(response))
    .catch(error => console.log(error));
  }

}
