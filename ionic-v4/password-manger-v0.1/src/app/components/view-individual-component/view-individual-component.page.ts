import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from '../../services/news-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-view-individual-component',
    templateUrl: './view-individual-component.page.html',
    styleUrls: ['./view-individual-component.page.scss'],
})
export class ViewIndividualComponentPage implements OnInit {
    individualArticle;
    showArticle = true;

    constructor(private newsService: NewsServiceService, private  router: Router) {
    }

    ngOnInit() {
        if (this.newsService.currentArticle === undefined) {
            this.showArticle = false;
            this.router.navigate(['/view-password']);
            console.log('/view-password');
        } else {
            this.individualArticle = this.newsService.currentArticle;
            this.showArticle = true;
        }
    }

    redirectToFeed() {
        this.router.navigate(['/view-password']);
    }

}
