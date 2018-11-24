import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'pages', loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'Auth', loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '', redirectTo: 'pages', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
