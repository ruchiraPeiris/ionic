import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ViewPasswordComponentPage} from './view-password-component.page';

const routes: Routes = [
    {
        path: '',
        component: ViewPasswordComponentPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ViewPasswordComponentPage]
})
export class ViewPasswordComponentPageModule {
}
