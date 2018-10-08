import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-save-password-component',
    templateUrl: './save-password-component.page.html',
    styleUrls: ['./save-password-component.page.scss'],
})
export class SavePasswordComponentPage implements OnInit {
    inputWebsite;
    inputURL;
    inputUsername;
    inputPassword;
    inputDescription;

    constructor() {
    }

    ngOnInit() {
    }

}
