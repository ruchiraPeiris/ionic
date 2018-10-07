import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'view-password-component', loadChildren: './components/view-password-component/view-password-component.module#ViewPasswordComponentPageModule' },
  { path: 'view-password-list-component', loadChildren: './components/view-password-list-component/view-password-list-component.module#ViewPasswordListComponentPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
