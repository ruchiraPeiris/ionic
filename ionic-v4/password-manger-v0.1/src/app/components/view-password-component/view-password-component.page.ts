import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from '../../services/news-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-view-password-component',
    templateUrl: './view-password-component.page.html',
    styleUrls: ['./view-password-component.page.scss'],
})
export class ViewPasswordComponentPage implements OnInit {
    data;

    constructor(private newsService: NewsServiceService, private  router: Router) {
    }

    ngOnInit() {
        this.getNews();
    }

    getNews() {
        this.newsService.getData('everything?q=bitcoin&from=2018-09-09&sortBy=publishedAt')
            .subscribe(data => {
                this.data = data;
            });
    }

    onGoToIndividual(article) {
        this.newsService.currentArticle = article;
        this.router.navigate(['/view-individual']);
    }

}
