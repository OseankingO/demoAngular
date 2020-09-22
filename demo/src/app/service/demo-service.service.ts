import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  private postURL : string = "https://jsonplaceholder.typicode.com";

  constructor(private http : HttpClient) { }

  public getAllPost() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postURL + "/posts");
  }

  public getPostById(id : number) {
    return this.http.get<Post>(this.postURL + "/posts/" + id);
  }

  public createPost(post : Post) {
    return this.http.post<Post>(this.postURL + "/posts", post);
  }

  public updatePost(id : string, post : Post) {
    console.log("I am updating post " + id + " into:");
    console.log(post);
    return this.http.put(this.postURL + "/posts/" + id, post);
  }

  public deletePostById(id : string) {
    console.log("I am deleting post " + id);
    return this.http.delete(this.postURL + "/posts/" + id);
  }
}
