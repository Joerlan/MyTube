import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../post.model";
import { PostsService } from "../post.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  posts: Post[] = [];
  isLoading = false;
  totalSize = 0;
  postsPerPage = 2;
  pageIndex = 0;
  pageSizeOptions = [2,5,10];
  isAuthenticated = false;

  private postsSub: Subscription;

  constructor(public postsService: PostsService, private authService: AuthService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts(this.postsPerPage, this.pageIndex);
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((data: {posts: Post[], count: number}) => {
        this.isLoading = false;
        this.posts = data.posts;
        this.totalSize = data.count;
      });
    this.isAuthenticated = this.authService.getAuthStatus();
    this.authService.getAuthStatusListener().subscribe((authStatus)=>{
      this.isAuthenticated = authStatus;
    });
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.pageIndex);
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }


  onChangedPage(pageEvent: PageEvent){
    this.isLoading = true;
    this.pageIndex = pageEvent.pageIndex;
    this.postsPerPage = pageEvent.pageSize;
    this.postsService.getPosts(this.postsPerPage, this.pageIndex);
  }
}
