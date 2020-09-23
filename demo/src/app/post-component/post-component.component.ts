import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DemoServiceService } from '../service/demo-service.service';
import { Post } from '../Interfaces/post';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts : Post[];
  headers = ["Post Id", "User Id", "Title", "Body"];
  headersJson = ["id", "userId", "title", "body"];
  createId : number;
  createUserId : number;
  createTitle : string;
  createBody : string;

  constructor(private demoService : DemoServiceService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  public getAllPost() { 
    this.demoService.getAllPost().subscribe(data => {
      console.log("Post All!!!!!");
      this.posts = data;
    });
  }

  public getPostById(id) {
    this.demoService.getPostById(id).subscribe(data => {
      console.log("POST!!!!!!")
      document.getElementById("posts").innerHTML += "<tr><td>" + data.userId + "</td><td>" + data.title + "</td><td>" + data.body + "</tr>";
    })
  }

  public createPost(){
    let post = {
      id : this.createId,
      userId : this.createUserId,
      title : this.createTitle,
      body : this.createBody
    }
    this.createId = null;
    this.createUserId = null;
    this.createTitle = null;
    this.createBody = null;
    this.posts.push(post);
    console.log(this.demoService.createPost(post));
  }

  public deletePostById(event) {
    let buttonId= event.target.attributes.id.nodeValue;
    let postId = buttonId.replace("DeletButton", "");
    let updatePostIndex = this.posts.findIndex(i => i.id === Number(postId));
    this.posts.splice(updatePostIndex, 1);
    this.demoService.deletePostById(postId);
  }

  public updatePostById(event) {
    let buttonId= event.target.attributes.id.nodeValue;
    let postId = buttonId.replace("UpdateButton", "");
    let newPostId = (<HTMLInputElement>document.getElementById(postId + "PostIdInput")).value;
    let newUserId = (<HTMLInputElement>document.getElementById(postId + "UserIdInput")).value;
    let newTitle = (<HTMLInputElement>document.getElementById(postId + "TitleInput")).value;
    let newBody = (<HTMLInputElement>document.getElementById(postId + "BodyInput")).value;
    let newPost : Post = {
      id : Number(newPostId),
      userId : Number(newUserId),
      title : newTitle,
      body : newBody
    };
    let updatePostIndex = this.posts.findIndex(i => i.id === Number(postId));
    this.demoService.updatePost(postId, newPost);
    this.posts[updatePostIndex] = newPost;
  }
}
