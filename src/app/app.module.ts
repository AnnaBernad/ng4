import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import {UserResolveService} from './services/user-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';
import {PostResolveService} from './services/post-resolve.service';
import { FullPostComponent } from './components/full-post/full-post.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService}, children: [
      {path: ':id', component: FullUserComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    FullUserComponent,
    PostComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
