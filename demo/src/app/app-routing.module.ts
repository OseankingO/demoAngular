import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { RouterModule, Routes} from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { PostComponentComponent } from './post-component/post-component.component';

const routes: Routes = [
  { path: 'home', component: DemoComponentComponent },
  { path: 'post', component: PostComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: DemoComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
