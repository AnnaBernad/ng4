import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {Post} from '../models/Post';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve

  <Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPosts();
  }
}
