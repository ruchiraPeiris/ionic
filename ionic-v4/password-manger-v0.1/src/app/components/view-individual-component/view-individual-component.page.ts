import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from '../../services/news-service.service';

@Component({
    selector: 'app-view-individual-component',
    templateUrl: './view-individual-component.page.html',
    styleUrls: ['./view-individual-component.page.scss'],
})
export class ViewIndividualComponentPage implements OnInit {
    individualArticle;

    constructor(private newsService: NewsServiceService) {
    }

    ngOnInit() {
        this.individualArticle = this.newsService.currentArticle;

    }

}
