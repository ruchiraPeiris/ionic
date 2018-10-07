import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPasswordListComponentPage } from './view-password-list-component.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPasswordListComponentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewPasswordListComponentPage]
})
export class ViewPasswordListComponentPageModule {}
