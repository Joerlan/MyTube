import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient){}

  getPosts(){
    return this.http.get<{message:string, posts: any}>("http://localhost:3000/api/posts")
    .pipe(map(postData => {
      return postData.posts.map(post => {
        return {
          id: post._id,
          title: post.title,
          content: post.content
        }
      })
    }))
    .subscribe((parsedPosts) => {
      this.posts = parsedPosts;
      this.postsUpdated.next([...this.posts])
      console.log(this.posts);
    });
  }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(id:string){
    return {...this.posts.find(p => p.id === id)};
  }

  addPost(title:string, content: string){
    const post: Post = {id: null, title:title, content:content};
    this.http.post<{message:string, postId:string}>("http://localhost:3000/api/posts", post)
    .subscribe((response)=>{
      post.id = response.postId;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts])
    });
  }

  updatePost(id:string, title:string, content: string){
    const post: Post = {id: id, title:title, content:content};
    this.http.put<{message:string}>("http://localhost:3000/api/posts/"+id, post)
    .subscribe((response)=>{
      console.log(response);
      // this.posts.push(post);
      // this.postsUpdated.next([...this.posts])
    });
  };

  deletePost(postId: string){
    this.http.delete("http://localhost:3000/api/posts/"+postId)
    .subscribe((response)=>{
      console.log(response);
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}
