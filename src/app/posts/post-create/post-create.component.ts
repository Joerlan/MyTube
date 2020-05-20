import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit{

  private mode: string = 'create';
  private postId: string;
  post: Post;

  constructor(public postService:PostService,
    public route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has("postId")) {
        this.mode = 'edit'
        this.postId = paramMap.get('postId');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create'
        this.postId = null;
        this.post = undefined;
      }
    });
  }

  onSavePost(form: NgForm) {

    if(form.invalid){
      return;
    }

    if(this.mode == 'create'){
      this.postService.addPost(form.value.title,form.value.content);
    }else if (this.mode == 'edit') {
      this.postService.updatePost(this.postId,form.value.title,form.value.content);
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // }

    form.resetForm();
  }
}
