import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthGuard } from './auth/auth.guard';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent},

  //old paths
  // { path: '', component: PostListComponent},
  // { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  // { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule {

}
