import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-view-password-list-component',
    templateUrl: './view-password-list-component.page.html',
    styleUrls: ['./view-password-list-component.page.scss'],
})
export class ViewPasswordListComponentPage implements OnInit {
    passwordGroups = [
        {
            'groupName': 'Social Media',
            'groupAmount': 5
        },
        {
            'groupName': 'Banking and Finance',
            'groupAmount': 3
        },
        {
            'groupName': 'Other',
            'groupAmount': 15
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
