import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ViewIndividualComponentPage} from './view-individual-component.page';

const routes: Routes = [
    {
        path: '',
        component: ViewIndividualComponentPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ViewIndividualComponentPage]
})
export class ViewIndividualComponentPageModule {
}
