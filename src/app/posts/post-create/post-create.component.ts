import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  textValue = "";
  newPost = 'No CONTENT';

  onAddPost() {
    this.newPost = this.textValue;
  }
}
