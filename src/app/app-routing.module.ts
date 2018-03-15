import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NuovoPostComponent } from './nuovo-post/nuovo-post.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nuovoPost', component: NuovoPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
