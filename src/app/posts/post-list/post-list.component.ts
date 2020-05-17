import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: "title1", content: "content1"},
  //   {title: "title2", content: "content2"},
  //   {title: "title3", content: "content3"}
  // ]
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postService: PostService) {

  }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }

}
