import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PridePlaces';
  p: number = 1;
  posts
  users
  user
  currentPost
  constructor(private crud: CrudService) { 
    this.getPost()
    this.getUsers()
    }
    
    getPost(){
      this.crud.getData('posts')
      .subscribe(
        (res: any)=>{
          this.posts = res
        })
    }
    
    
    getUsers(){
      this.crud.getData('users')
      .subscribe(
        (res: any)=>{
          this.users = res
        })
    }

    openDetails(post){
      let p =this.users.filter((e)=>{
        return e.id === post.userId
      }) 
      this.currentPost = post
      this.user=p[0]

      $('#exampleModal').modal('show');
    }
}