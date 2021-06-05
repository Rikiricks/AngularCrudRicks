import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Categories, Post } from '../models/post.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {
    }

    public getCategories(): Observable<Categories[]> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get<Categories[]>('https://localhost:44350/api/post/categories').pipe(
            retry(1),
            catchError(this.errorHandler)
          );
    }

    public getCategories2()  {
        return this.http.get<Categories[]>('https://localhost:44350/api/post/categories').pipe(
            retry(1),
            catchError(this.errorHandler)
          );
    }

    public addPost(postData: Post): Observable<Post>
    {
      debugger;
       return this.http.post<Post>('https://localhost:44350/api/post/AddPost', postData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
         retry(1),
         catchError(this.errorHandler)
       );
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }

}

