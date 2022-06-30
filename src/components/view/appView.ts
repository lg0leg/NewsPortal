import News from './news/news';
import Sources from './sources/sources';
import { DrowNewsData } from '../../types/types';
import { DrowSourcesData } from '../../types/types';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: DrowNewsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: DrowSourcesData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
