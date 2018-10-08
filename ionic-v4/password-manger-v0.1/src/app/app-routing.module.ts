import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
    {
        path: 'view-password',
        loadChildren: './components/view-password-component/view-password-component.module#ViewPasswordComponentPageModule'
    },
    {
        path: 'view-password-list',
        loadChildren: './components/view-password-list-component/view-password-list-component.module#ViewPasswordListComponentPageModule'
    },
    {
        path: 'save-password',
        loadChildren: './components/save-password-component/save-password-component.module#SavePasswordComponentPageModule'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
