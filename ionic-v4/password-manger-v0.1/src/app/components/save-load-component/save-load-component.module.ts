import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaveLoadComponentPage } from './save-load-component.page';

const routes: Routes = [
  {
    path: '',
    component: SaveLoadComponentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaveLoadComponentPage]
})
export class SaveLoadComponentPageModule {}
