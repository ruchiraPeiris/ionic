import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-view-password-list-component',
    templateUrl: './view-password-list-component.page.html',
    styleUrls: ['./view-password-list-component.page.scss'],
})
export class ViewPasswordListComponentPage implements OnInit {
    passwordList = [
        {
            'id': 1,
            'website': 'KRIYO',
            'url': 'https://kriyo.net',
            'username': 'kavindu',
            'password': 'test',
            'description': 'Redefining the employer and employee journey by a centralizing solution'
        },
        {
            'id': 2,
            'website': 'Gmail',
            'url': 'https://mail.google.com',
            'username': 'narathota',
            'password': 'test',
            'description': 'gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail gmail '
        },
        {
            'id': 3,
            'website': 'Facebook',
            'url': 'https://facebook.com',
            'username': 'narathota',
            'password': 'testtesttest',
            'description': 'Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook '
        },
        {
            'id': 4,
            'website': 'Twitter',
            'url': 'https://twitter.com',
            'username': 'narathota',
            'password': 'test test',
            'description': 'Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter '
        },
        {
            'id': 5,
            'website': 'Github',
            'url': 'https://github.com',
            'username': 'narathota',
            'password': 'naratestnaratest',
            'description': 'Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo Best Code Repo '
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
