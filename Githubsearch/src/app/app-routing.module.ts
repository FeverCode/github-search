import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';



const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'result', component: ResultComponent },
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
