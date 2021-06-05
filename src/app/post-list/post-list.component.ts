import { Component, OnInit } from '@angular/core';
import { Post, Categories } from '../models/post.model';
import { PostService } from '../employees/Post.Service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  categoris: Categories[];

  categoris$: Observable<Categories[]>;


  constructor(private postService: PostService) {
    this.postService.getCategories2().subscribe(response => {
      this.categoris = response;
      console.log(response);
    });

    this.categoris$ = postService.getCategories();
    
    console.log(this.categoris$);
  }

  ngOnInit(): void {
    // this.categoris = [{ id: 1, name: 'Riki' , slug: 'test' }];
  }

}
