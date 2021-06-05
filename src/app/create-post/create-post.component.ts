import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../employees/Post.Service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postModel: Post =
  {
    POST_ID: 1,
    DESCRIPTION: null,
    TITLE: null,
    CATEGORY_ID: null,
    CREATED_DATE: null
  };

  constructor(private postService: PostService) {

   }

  ngOnInit(): void {
  }

  savePost(model: Post){
    this.postService.addPost(model).subscribe((data: Post) => {
      console.log(data);
    },
      (error: any) => { console.log(error); }
    );
  }

}
